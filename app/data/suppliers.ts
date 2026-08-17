export type Supplier = {
  name: string;
  logo: string;
  email?: string;
  phone?: string;
  whatsapp?: string;
  orderMethod?: "Email" | "WhatsApp" | "Phone" | "Portal";
};

export const suppliers: Record<string, Supplier> = {
  "Albion Fine Foods": {
    name: "Albion Fine Foods",
    logo: "/suppliers/albion.png",
    email: "orders@albionff.co.uk",
    orderMethod: "Email",
  },

  "Ascot Wholesale": {
    name: "Ascot Wholesale",
    logo: "/suppliers/ascot-wholesale.png",
  },

  "Big K Charcoal": {
    name: "Big K Charcoal",
    logo: "/suppliers/big-k.png",
    email: "sales@bigk.co.uk",
    orderMethod: "Email",
  },

  "Crazy Dan's House of Meat": {
    name: "Crazy Dan's House of Meat",
    logo: "/suppliers/crazy-dans.png",
    email: "houseofmeats@btconnect.com",
    orderMethod: "Email",
  },

  "Fin and Flounder": {
    name: "Fin and Flounder",
    logo: "/suppliers/fin-and-flounder.png",
    email: "restaurants@findandflounder.com",
    orderMethod: "Email",
  },

  "James Knight of Mayfair": {
    name: "James Knight of Mayfair",
    logo: "/suppliers/james-knight.png",
    email: "sales@jkmayfair.co.uk",
    orderMethod: "Email",
  },

  Masafina: {
    name: "Masafina",
    logo: "/suppliers/masafina.png",
    email: "orders@masafina.com",
    orderMethod: "Email",
  },

  Mexgrocer: {
    name: "Mexgrocer",
    logo: "/suppliers/mexgrocer.png",
    email: "orders@mexgrocer.co.uk",
    orderMethod: "Email",
  },

  "Oui Chef": {
    name: "Oui Chef",
    logo: "/suppliers/oui-chef.png",
  },

  "Raynor Hygiene": {
    name: "Raynor Hygiene",
    logo: "/suppliers/raynor-hygiene.png",
  },

  "Spitalfields Fruit & Veg": {
    name: "Spitalfields Fruit & Veg",
    logo: "",
    phone: "07940 118192",
    whatsapp: "447940118192",
    orderMethod: "WhatsApp",
  },

  "Tazaki Foods": {
    name: "Tazaki Foods",
    logo: "",
    email: "japanesesales@tazakifoods.com",
    orderMethod: "Email",
  },

  "Woods Fine Foods": {
    name: "Woods Fine Foods",
    logo: "/suppliers/woods.png",
    email: "orders@woodsfoodservice.co.uk",
    orderMethod: "Email",
  },
};

export function getSupplierLogo(supplierName: string) {
  return suppliers[supplierName]?.logo || null;
}

export function getSupplierEmail(supplierName: string) {
  return suppliers[supplierName]?.email || null;
}

export function getSupplierOrderMethod(supplierName: string) {
  return suppliers[supplierName]?.orderMethod || null;
}
