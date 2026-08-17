import OpenAI from 'openai';
import { NextResponse } from 'next/server';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const file = formData.get('file');
    const selectedSupplier = formData.get('supplier')?.toString() || null;

    if (!(file instanceof File)) {
      return NextResponse.json(
        {
          error: 'No invoice file provided.',
        },
        {
          status: 400,
        }
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        {
          error: 'OpenAI API key is not configured.',
        },
        {
          status: 500,
        }
      );
    }

    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];

    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        {
          error: 'Please upload a JPG, PNG or WEBP invoice.',
        },
        {
          status: 400,
        }
      );
    }

    const bytes = await file.arrayBuffer();

    const base64 = Buffer.from(bytes).toString('base64');

    const dataUrl = `data:${file.type};base64,${base64}`;

    const response = await openai.responses.create({
      model: 'gpt-5-mini',

      input: [
        {
          role: 'user',

          content: [
            {
              type: 'input_text',

              text: `

You are extracting purchasing data from a UK restaurant supplier document.

The selected supplier is:
${selectedSupplier || 'Unknown'}

Use this as a guide, but always trust the invoice itself.

Identify whether this is:
- invoice
- credit note
- delivery note


Extract:

HEADER INFORMATION
- supplier name
- invoice number
- invoice date
- subtotal before VAT
- VAT amount
- total amount


PRODUCT LINES

For every purchased line extract:

- exact product description as printed
- quantity
- pack size
- unit
- brand if visible
- SKU/code if visible
- category
- unit price
- line total


Important rules:

- Do not invent information.
- Use null when unreadable.
- Keep original supplier wording.
- Do not merge similar products.
- Keep separate lines separate.
- Ignore:
  - payment details
  - account information
  - delivery addresses
  - previous balances
  - totals sections

UK supplier invoices often show:
- packs like "1 x 5kg"
- cases like "12 x 500g"
- prices excluding VAT
- weight products sold by kg

Return only structured data.

                `.trim(),
            },

            {
              type: 'input_image',

              image_url: dataUrl,

              detail: 'high',
            },
          ],
        },
      ],

      text: {
        format: {
          type: 'json_schema',

          name: 'restaurant_purchase_document',

          strict: true,

          schema: {
            type: 'object',

            properties: {
              documentType: {
                type: 'string',
                enum: ['invoice', 'credit_note', 'delivery_note'],
              },

              supplier: {
                type: ['string', 'null'],
              },

              invoiceNumber: {
                type: ['string', 'null'],
              },

              invoiceDate: {
                type: ['string', 'null'],
              },

              subtotal: {
                type: ['number', 'null'],
              },

              vat: {
                type: ['number', 'null'],
              },

              total: {
                type: ['number', 'null'],
              },

              lineItems: {
                type: 'array',

                items: {
                  type: 'object',

                  properties: {
                    product: {
                      type: 'string',
                    },

                    quantity: {
                      type: ['number', 'string', 'null'],
                    },

                    pack: {
                      type: ['string', 'null'],
                    },

                    unit: {
                      type: ['string', 'null'],
                    },

                    brand: {
                      type: ['string', 'null'],
                    },

                    sku: {
                      type: ['string', 'null'],
                    },

                    category: {
                      type: ['string', 'null'],
                    },

                    unitPrice: {
                      type: ['number', 'null'],
                    },

                    total: {
                      type: ['number', 'null'],
                    },

                    confidence: {
                      type: ['string', 'null'],
                    },

                    status: {
                      type: 'string',
                      enum: ['Extracted'],
                    },
                  },

                  required: [
                    'product',
                    'quantity',
                    'pack',
                    'unit',
                    'brand',
                    'sku',
                    'category',
                    'unitPrice',
                    'total',
                    'confidence',
                    'status',
                  ],

                  additionalProperties: false,
                },
              },
            },

            required: [
              'documentType',
              'supplier',
              'invoiceNumber',
              'invoiceDate',
              'subtotal',
              'vat',
              'total',
              'lineItems',
            ],

            additionalProperties: false,
          },
        },
      },
    });

    const outputText = response.output_text;

    if (!outputText) {
      throw new Error('No extraction returned from OpenAI.');
    }

    const invoice = JSON.parse(outputText);

    return NextResponse.json({
      success: true,

      fileName: file.name,

      fileType: file.type,

      fileSize: file.size,

      invoice,
    });
  } catch (error) {
    console.error('Invoice extraction error:', error);

    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : 'Failed to process invoice.',
      },

      {
        status: 500,
      }
    );
  }
}
