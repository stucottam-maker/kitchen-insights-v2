"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../../components/Sidebar";

type InvoiceLineItem = {
  product: string;

  quantity: number | null;

  pack: string;

  unit?: string | null;

  brand?: string | null;

  sku?: string | null;

  category?: string | null;

  confidence?: string | null;

  unitPrice: number | null;

  total: number | null;

  status?: string;

  ingredientMatch?: string;
};


type InvoiceData = {
  supplier: string;

  invoiceNumber: string;

  invoiceDate: string;

  subtotal: number | null;

  vat: number | null;

  total: number | null;

  lineItems: InvoiceLineItem[];
};


type IngredientPrice = {
  price: number;

  unit: string;

  supplier: string;

  product: string;

  updatedAt: string;

  invoiceNumber?: string;

  invoiceDate?: string;
};


type PriceHistoryEntry = {
  ingredient: string;

  supplier: string;

  supplierProduct: string;

  price: number;

  unit: string;

  invoiceNumber: string;

  invoiceDate: string;

  recordedAt: string;
};


type ApprovedInvoice = InvoiceData & {
  id: string;

  status: "Approved";

  approvedAt: string;
};


type SupplierProduct = {
  ingredient: string;

  supplier: string;

  product: string;

  brand?: string | null;

  sku?: string | null;

  category?: string | null;

  pack?: string | null;

  unit: string;

  latestPrice: number | null;

  updatedAt: string;
};



const masterIngredients = [

  // FISH

  "Cod",
  "Black cod",
  "26/30 prawn",
  "King prawn",
  "Tuna loin",
  "Stonebass",
  "Trout",
  "Salmon",
  "Hake",
  "Sea bass",
  "Squid",
  "Octopus",
  "Scallop",
  "Crab meat",
  "Mussels",


  // MEAT

  "Ribeye",
  "Short rib",
  "Pork belly",
  "Chicken thigh",
  "Whole chicken",
  "Birria beef",
  "Carnitas pork",
  "Brisket",
  "Ox cheek",
  "Lamb cutlet",
  "Lamb rack",
  "Tomahawk",
  "Chorizo",


  // MEXICAN

  "Masafina tortilla 12cm",
  "Masafina tortilla 10cm",
  "Masafina blue corn tortilla 12cm",
  "Aji Amarillo",
  "Achiote paste",
  "Chipotle in adobo",
  "Black beans",
  "Ancho chilli",
  "Morita chilli",
  "Habanero chilli",
  "Arbol chilli",
  "Mexican oregano",
  "Agave syrup",


  // PRODUCE

  "Avocado",
  "Lime",
  "Lemon",
  "Orange",
  "Pineapple",
  "Plantain",
  "Aubergine",
  "Spring onion",
  "Red onion",
  "White onion",
  "Spanish onion",
  "Garlic",
  "Peeled garlic",
  "Ginger",
  "Coriander",
  "Chives",
  "Fennel",
  "Hispi cabbage",
  "Red cabbage",
  "Carrot",
  "Cauliflower",
  "Celery",
  "Courgette",
  "Sweet potato",
  "Green tomato",
  "Plum tomato",
  "Cherry tomato",
  "Jalapeño",
  "Padron pepper",
  "Maitake mushroom",
  "King oyster mushroom",


  // DRY

  "Rice flour",
  "Potato flour",
  "Cornflour",
  "Plain flour",
  "Panko",
  "Caster sugar",
  "Brown sugar",
  "Milk powder",
  "Salt",
  "Black pepper",
  "Cumin",
  "Cinnamon",


  // SAUCES

  "Miso",
  "Mirin",
  "Rice vinegar",
  "Fish sauce",
  "Rapeseed oil",
  "Olive oil",
  "Dijon mustard",
  "Vegan mayo",
  "Coconut milk",


  // DAIRY

  "Butter",
  "Double cream",
  "Soured cream",
  "Creme fraiche",
  "Greek yoghurt",
  "Eggs",

];


function money(value:number|null|undefined){

  if(
    value === null ||
    value === undefined ||
    Number.isNaN(value)
  ){
    return "—";
  }


  return new Intl.NumberFormat(
    "en-GB",
    {
      style:"currency",
      currency:"GBP",
    }
  ).format(value);

}



function numberValue(value:unknown):number|null{

  if(
    value === null ||
    value === undefined ||
    value === ""
  ){
    return null;
  }


  if(typeof value === "number"){

    return Number.isFinite(value)
      ? value
      : null;

  }


  const cleaned =
    String(value)
      .replace(/£/g,"")
      .replace(/,/g,"")
      .trim();


  const parsed =
    Number(cleaned);


  return Number.isFinite(parsed)
    ? parsed
    : null;

}



function normalise(value:string){

  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g," ")
    .trim();

}



function guessIngredient(product:string){

  const text =
    normalise(product);


  const rules:[string[],string][]=[

    [["black cod"],"Black cod"],
    [["cod"],"Cod"],
    [["stone bass"],"Stonebass"],
    [["stonebass"],"Stonebass"],
    [["trout"],"Trout"],
    [["tuna"],"Tuna loin"],
    [["prawn"],"26/30 prawn"],

    [["ribeye"],"Ribeye"],
    [["short rib"],"Short rib"],
    [["beef rib"],"Short rib"],
    [["pork belly"],"Pork belly"],
    [["chicken thigh"],"Chicken thigh"],
    [["brisket"],"Brisket"],
    [["ox cheek"],"Ox cheek"],
    [["tomahawk"],"Tomahawk"],
    [["chorizo"],"Chorizo"],

    [["tortilla"],"Masafina tortilla 12cm"],
    [["achiote"],"Achiote paste"],
    [["chipotle"],"Chipotle in adobo"],

    [["avocado"],"Avocado"],
    [["lime"],"Lime"],
    [["garlic"],"Garlic"],
    [["onion"],"White onion"],

    [["miso"],"Miso"],
    [["mirin"],"Mirin"],
    [["fish sauce"],"Fish sauce"],

    [["cream"],"Double cream"],

  ];


  for(const [terms,ingredient] of rules){

    if(
      terms.every(
        term=>text.includes(term)
      )
    ){
      return ingredient;
    }

  }


  return "";
  function detectPriceUnit(item: InvoiceLineItem){

    const combined =
      `${item.product} ${item.pack} ${item.unit}`
        .toLowerCase();
  
  
    if(
      combined.includes("kg") ||
      combined.includes("kilo")
    ){
      return "kg";
    }
  
  
    if(
      combined.includes("litre") ||
      combined.includes("ltr") ||
      combined.includes(" litre")
    ){
      return "L";
    }
  
  
    if(
      combined.includes("case")
    ){
      return "case";
    }
  
  
    if(
      combined.includes("box")
    ){
      return "box";
    }
  
  
    if(
      combined.includes("pack")
    ){
      return "pack";
    }
  
  
    if(
      combined.includes("bag")
    ){
      return "bag";
    }
  
  
    return "each";
  
  }
  
  
  
  function loadInvoiceFromSession():InvoiceData|null{
  
    const keys=[
  
      "invoiceExtraction",
  
      "extractedInvoice",
  
      "invoiceData",
  
      "invoiceDraft",
  
      "invoiceReview",
  
    ];
  
  
    for(const key of keys){
  
      const stored =
        sessionStorage.getItem(key);
  
  
      if(!stored){
        continue;
      }
  
  
      try{
  
        const parsed =
          JSON.parse(stored);
  
  
        const invoice =
          parsed?.invoice ??
          parsed?.extraction ??
          parsed?.data ??
          parsed;
  
  
        if(
          invoice &&
          Array.isArray(
            invoice.lineItems
          )
        ){
  
          return {
  
            supplier:
              invoice.supplier ?? "",
  
  
            invoiceNumber:
              invoice.invoiceNumber ?? "",
  
  
            invoiceDate:
              invoice.invoiceDate ?? "",
  
  
            subtotal:
              numberValue(
                invoice.subtotal
              ),
  
  
            vat:
              numberValue(
                invoice.vat
              ),
  
  
            total:
              numberValue(
                invoice.total
              ),
  
  
            lineItems:
  
              invoice.lineItems.map(
                (item:any)=>({
  
                  product:
                    item.product ?? "",
  
  
                  quantity:
                    numberValue(
                      item.quantity
                    ),
  
  
                  pack:
                    item.pack ?? "",
  
  
                  unit:
                    item.unit ?? null,
  
  
                  brand:
                    item.brand ?? null,
  
  
                  sku:
                    item.sku ?? null,
  
  
                  category:
                    item.category ?? null,
  
  
                  confidence:
                    item.confidence ?? null,
  
  
                  unitPrice:
                    numberValue(
                      item.unitPrice
                    ),
  
  
                  total:
                    numberValue(
                      item.total
                    ),
  
  
                  status:
                    item.status ??
                    "Review",
  
  
                  ingredientMatch:
                    item.ingredientMatch ??
                    guessIngredient(
                      item.product ?? ""
                    ),
  
                })
              ),
  
          };
  
        }
  
  
      }catch{
  
        continue;
  
      }
  
    }
  
  
    return null;
  
  }
  
  
  
  
  export default function InvoiceReviewPage(){
  
  
  const router = useRouter();
  
  
  const [invoice,setInvoice]=
  useState<InvoiceData|null>(null);
  
  
  const [loading,setLoading]=
  useState(true);
  
  
  const [approved,setApproved]=
  useState(false);
  
  
  const [error,setError]=
  useState("");
  
  
  
  useEffect(()=>{
  
   const loaded =
     loadInvoiceFromSession();
  
  
   if(!loaded){
  
     setError(
       "No invoice found. Upload an invoice first."
     );
  
     setLoading(false);
  
     return;
  
   }
  
  
   setInvoice(loaded);
  
   setLoading(false);
  
  
  },[]);
  
  
  
  const matchedCount =
  useMemo(()=>{
  
   return (
     invoice?.lineItems.filter(
       item =>
         item.ingredientMatch &&
         item.ingredientMatch.trim()
     ).length ?? 0
   );
  
  },[invoice]);
  
  
  
  const unmatchedCount =
  (invoice?.lineItems.length ?? 0)
  -
  matchedCount;
  
  
  
  function updateLine(
   index:number,
   field:keyof InvoiceLineItem,
   value:any
  ){
  
   setInvoice(current=>{
  
    if(!current)
      return current;
  
  
    const lines =
      current.lineItems.map(
        (item,i)=>{
  
          if(i!==index)
            return item;
  
  
          return {
  
            ...item,
  
            [field]:
  
              field==="quantity" ||
              field==="unitPrice" ||
              field==="total"
  
              ? numberValue(value)
  
              : value,
  
          };
  
        }
      );
  
  
    return {
  
      ...current,
  
      lineItems:lines,
  
    };
  
  
   });
  
  
  }
  
  
  
  
  function approveInvoice(){
  
   if(!invoice)
     return;
  
  
  
   if(!invoice.supplier){
  
     alert(
      "Supplier required"
     );
  
     return;
  
   }
  
  
  
   const now =
     new Date().toISOString();
  
  
  
  /*
   -----------------------------
   UPDATE LIVE PRICES
   -----------------------------
  */
  
  
  const ingredientPrices =
  JSON.parse(
   localStorage.getItem(
   "ingredientPrices"
   )
   ||
   "{}"
  );
  
  
  
  const priceHistory =
  JSON.parse(
   localStorage.getItem(
   "ingredientPriceHistory"
   )
   ||
   "[]"
  );
  
  
  
  invoice.lineItems.forEach(item=>{
  
  
   const ingredient =
     item.ingredientMatch;
  
  
   const price =
     numberValue(
      item.unitPrice
     );
  
  
   if(
     !ingredient ||
     !price
   ){
     return;
   }
  
  
  
   const unit =
     item.unit ||
     detectPriceUnit(item);
  
  
  
   ingredientPrices[ingredient]={
  
     price,
  
     unit,
  
     supplier:
       invoice.supplier,
  
     product:
       item.product,
  
     updatedAt:
       now,
  
     invoiceNumber:
       invoice.invoiceNumber,
  
     invoiceDate:
       invoice.invoiceDate,
  
   };
  
  
  
   priceHistory.push({
  
     ingredient,
  
     supplier:
       invoice.supplier,
  
     supplierProduct:
       item.product,
  
     price,
  
     unit,
  
     invoiceNumber:
       invoice.invoiceNumber,
  
     invoiceDate:
       invoice.invoiceDate,
  
     recordedAt:
       now,
  
   });
  
  
  });
  
  
  
  localStorage.setItem(
   "ingredientPrices",
   JSON.stringify(
    ingredientPrices
   )
  );
  
  
  
  localStorage.setItem(
   "ingredientPriceHistory",
   JSON.stringify(
    priceHistory
   )
  );
  
  
  
  
  /*
   -----------------------------
   SAVE APPROVED INVOICE
   -----------------------------
  */
  
  
  const approvedInvoices =
  JSON.parse(
   localStorage.getItem(
   "approvedInvoices"
   )
   ||
   "[]"
  );
  
  
  
  const id =
  `${invoice.supplier}-${invoice.invoiceNumber}-${invoice.invoiceDate}`
  .toLowerCase()
  .replace(
   /[^a-z0-9]+/g,
   "-"
  );
  
  
  
  const approvedInvoice={
  
   ...invoice,
  
   id,
  
   status:"Approved",
  
   approvedAt:now,
  
  };
  
  
  
  localStorage.setItem(
  
   "approvedInvoices",
  
   JSON.stringify(
    [
     approvedInvoice,
     ...approvedInvoices.filter(
      (item:any)=>
        item.id!==id
     )
    ]
   )
  
  );
  
  
  
  
  /*
   -----------------------------
   SAVE SUPPLIER KNOWLEDGE
   -----------------------------
  */
  
  
  const supplierProducts =
  JSON.parse(
   localStorage.getItem(
   "supplierProducts"
   )
   ||
   "{}"
  );
  
  
  
  invoice.lineItems.forEach(item=>{
  
  
   if(
    !item.ingredientMatch
   )
   return;
  
  
  
  const key =
  `${invoice.supplier}|${item.product}`
  .toLowerCase();
  
  
  
  supplierProducts[key]={
  
  
   ingredient:
    item.ingredientMatch,
  
  
   supplier:
    invoice.supplier,
  
  
   product:
    item.product,
  
  
   brand:
    item.brand ?? null,
  
  
   sku:
    item.sku ?? null,
  
  
   category:
    item.category ?? null,
  
  
   pack:
    item.pack ?? null,
  
  
   unit:
    item.unit ||
    detectPriceUnit(item),
  
  
   latestPrice:
    item.unitPrice,
  
  
   updatedAt:
    now,
  
  
  };
  
  
  
  });
  
  
  
  localStorage.setItem(
  
  "supplierProducts",
  
  JSON.stringify(
   supplierProducts
  )
  
  );
  
  
  
  setApproved(true);
  
  
  alert(
   "Invoice approved. Prices and supplier products updated."
  );
  
  if (loading) {
    return (
      <main className="app-shell">
        <Sidebar active="invoices" />
  
        <section className="main-content">
          <div className="empty-table-message">
            Loading invoice...
          </div>
        </section>
      </main>
    );
  }
  
  
  
  if (!invoice) {
    return (
      <main className="app-shell">
        <Sidebar active="invoices" />
  
        <section className="main-content">
  
          <header className="topbar">
            <div>
  
              <p className="eyebrow">
                Invoice review
              </p>
  
              <h1>
                No invoice found
              </h1>
  
              <p className="page-description">
                {error}
              </p>
  
            </div>
          </header>
  
  
          <button
            className="primary-button"
            onClick={() =>
              router.push(
                "/invoices/upload"
              )
            }
          >
            Upload invoice
          </button>
  
        </section>
  
      </main>
    );
  }
  
  
  
  return (
  
  <main className="app-shell">
  
  <Sidebar active="invoices" />
  
  
  <section className="main-content">
  
  
  <header className="topbar">
  
  <div>
  
  <p className="eyebrow">
  Invoice review
  </p>
  
  
  <h1>
  Review invoice
  </h1>
  
  
  <p className="page-description">
  Check extracted products, match ingredients and approve.
  </p>
  
  </div>
  
  
  
  <div
  style={{
  display:"flex",
  gap:"10px"
  }}
  >
  
  <button
  className="cancel-button"
  onClick={() =>
  router.push(
  "/invoices/upload"
  )
  }
  >
  Cancel
  </button>
  
  
  <button
  className="primary-button"
  disabled={approved}
  onClick={approveInvoice}
  >
  
  {
  approved
  ?
  "Approved ✓"
  :
  "Approve invoice"
  }
  
  </button>
  
  </div>
  
  
  </header>
  
  
  
  
  
  <section className="stats-grid">
  
  
  <article className="stat-card">
  
  <span>
  Supplier
  </span>
  
  <strong>
  {invoice.supplier || "Unknown"}
  </strong>
  
  </article>
  
  
  
  <article className="stat-card">
  
  <span>
  Invoice total
  </span>
  
  <strong>
  {money(invoice.total)}
  </strong>
  
  </article>
  
  
  
  <article className="stat-card">
  
  <span>
  Matched
  </span>
  
  <strong>
  {matchedCount}
  </strong>
  
  </article>
  
  
  
  <article className="stat-card">
  
  <span>
  Needs matching
  </span>
  
  <strong>
  {unmatchedCount}
  </strong>
  
  </article>
  
  
  </section>
  
  
  
  
  
  
  
  <section className="panel">
  
  
  <div className="panel-header">
  
  <div>
  
  <p className="panel-kicker">
  Invoice
  </p>
  
  
  <h2>
  Products extracted
  </h2>
  
  
  </div>
  
  
  </div>
  
  
  
  
  <div
  style={{
  overflowX:"auto"
  }}
  >
  
  
  <table className="ingredients-table">
  
  
  <thead>
  
  <tr>
  
  <th>
  Product
  </th>
  
  <th>
  SKU
  </th>
  
  <th>
  Brand
  </th>
  
  <th>
  Qty
  </th>
  
  <th>
  Pack
  </th>
  
  <th>
  Price
  </th>
  
  <th>
  Match
  </th>
  
  </tr>
  
  </thead>
  
  
  
  <tbody>
  
  
  {
  invoice.lineItems.map(
  (item,index)=>(
  
  
  <tr key={index}>
  
  
  <td>
  
  <input
  
  value={item.product}
  
  onChange={(e)=>
  updateLine(
  index,
  "product",
  e.target.value
  )
  }
  
  />
  
  
  {
  item.category &&
  
  <div
  style={{
  fontSize:"12px",
  opacity:.6
  }}
  >
  {item.category}
  </div>
  
  }
  
  
  </td>
  
  
  
  
  
  <td>
  
  <input
  
  value={
  item.sku ?? ""
  }
  
  onChange={(e)=>
  updateLine(
  index,
  "sku",
  e.target.value
  )
  }
  
  />
  
  </td>
  
  
  
  
  
  <td>
  
  <input
  
  value={
  item.brand ?? ""
  }
  
  onChange={(e)=>
  updateLine(
  index,
  "brand",
  e.target.value
  )
  }
  
  />
  
  </td>
  
  
  
  
  
  <td>
  
  <input
  
  type="number"
  
  value={
  item.quantity ?? ""
  }
  
  onChange={(e)=>
  updateLine(
  index,
  "quantity",
  e.target.value
  )
  }
  
  />
  
  </td>
  
  
  
  
  
  <td>
  
  <input
  
  value={
  item.pack
  }
  
  onChange={(e)=>
  updateLine(
  index,
  "pack",
  e.target.value
  )
  }
  
  />
  
  </td>
  
  
  
  
  
  <td>
  
  <input
  
  type="number"
  
  step="0.01"
  
  value={
  item.unitPrice ?? ""
  }
  
  onChange={(e)=>
  updateLine(
  index,
  "unitPrice",
  e.target.value
  )
  }
  
  />
  
  
  <div>
  {money(item.total)}
  </div>
  
  
  </td>
  
  
  
  
  
  
  <td>
  
  
  <select
  
  value={
  item.ingredientMatch ?? ""
  }
  
  
  onChange={(e)=>
  updateLine(
  index,
  "ingredientMatch",
  e.target.value
  )
  }
  
  >
  
  
  <option value="">
  Select ingredient
  </option>
  
  
  {
  masterIngredients.map(
  ingredient=>(
  
  <option
  key={ingredient}
  value={ingredient}
  >
  
  {ingredient}
  
  </option>
  
  )
  
  )
  
  }
  
  
  </select>
  
  
  
  </td>
  
  
  
  
  
  </tr>
  
  
  )
  
  )
  
  }
  
  
  </tbody>
  
  
  </table>
  
  
  </div>
  
  
  </section>
  
  
  
  
  
  
  
  
  <section
  className="panel"
  style={{
  marginTop:"24px",
  marginBottom:"80px"
  }}
  >
  
  
  <div className="panel-header">
  
  <div>
  
  <p className="panel-kicker">
  System update
  </p>
  
  
  <h2>
  Approval will update
  </h2>
  
  
  </div>
  
  
  </div>
  
  
  
  <div
  style={{
  display:"grid",
  gap:"10px"
  }}
  >
  
  <div>
  ✓ Ingredient prices updated
  </div>
  
  
  <div>
  ✓ Price history saved
  </div>
  
  
  <div>
  ✓ Supplier product knowledge stored
  </div>
  
  
  <div>
  ✓ Ordering engine receives new prices
  </div>
  
  
  <div>
  ✓ Ready for Supabase migration
  </div>
  
  
  </div>
  
  
  </section>
  
  
  
  
  
  <footer
  className="quick-order-footer"
  >
  
  <div>
  
  <span>
  {
  invoice.lineItems.length
  }
  lines
  </span>
  
  
  <strong>
  {money(invoice.total)}
  </strong>
  
  
  </div>
  
  
  
  
  <button
  
  className="primary-button quick-review-button"
  
  disabled={approved}
  
  onClick={approveInvoice}
  
  >
  
  {
  approved
  ?
  "Invoice approved ✓"
  :
  `Approve invoice${
  unmatchedCount
  ?
  ` · ${unmatchedCount} unmatched`
  :
  ""
  }`
  }
  
  
  </button>
  
  
  </footer>
  
  
  
  
  
  </section>
  
  
  </main>
  
  );
  
  }