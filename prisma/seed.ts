import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcrypt";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Starting seed...");

  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.product.deleteMany();
  await prisma.user.deleteMany();

  console.log("🗑️  Cleared existing data.");

  const adminPassword = await bcrypt.hash("admin123", 10);
  const userPassword = await bcrypt.hash("user123", 10);

  const admin = await prisma.user.create({
    data: {
      name: "Administrador Galinho",
      email: "admin@galinho.com.br",
      password: adminPassword,
      role: "admin",
    },
  });

  const user = await prisma.user.create({
    data: {
      name: "João Silva",
      email: "joao@example.com",
      password: userPassword,
      role: "user",
    },
  });

  console.log(`✅ Users created: ${admin.email}, ${user.email}`);

  const products = await prisma.product.createManyAndReturn({
    data: [
      // ─── Ar Condicionado (10) ─────────────────────────────────────────────
      {
        name: "Ar Condicionado Split Midea 9.000 BTU",
        description: "Inverter, frio e quente, WiFi, 220V. Eficiência A.",
        price: 1899.9,
        stock: 15,
        category: "Ar Condicionado",
      },
      {
        name: "Ar Condicionado Split Midea 12.000 BTU",
        description: "Inverter, frio e quente, WiFi, 220V. Eficiência A.",
        price: 2199.9,
        stock: 12,
        category: "Ar Condicionado",
      },
      {
        name: "Ar Condicionado Split Midea 18.000 BTU",
        description: "Inverter, ciclo frio, 220V. Ideal para ambientes grandes.",
        price: 2799.9,
        stock: 8,
        category: "Ar Condicionado",
      },
      {
        name: "Ar Condicionado Split Midea 24.000 BTU",
        description: "Inverter, ciclo frio, 220V. Para ambientes comerciais.",
        price: 3499.9,
        stock: 5,
        category: "Ar Condicionado",
      },
      {
        name: "Ar Condicionado Janela Consul 10.000 BTU",
        description: "Frio, 220V. Fácil instalação, ideal para quartos.",
        price: 1299.9,
        stock: 10,
        category: "Ar Condicionado",
      },
      {
        name: "Ar Condicionado Split Hotpoint 9.000 BTU",
        description: "Inverter, frio, 220V. Tecnologia britânica.",
        price: 1749.9,
        stock: 7,
        category: "Ar Condicionado",
      },
      {
        name: "Ar Condicionado Split Hotpoint 12.000 BTU",
        description: "Inverter, frio e quente, 220V. Wi-Fi integrado.",
        price: 2099.9,
        stock: 6,
        category: "Ar Condicionado",
      },
      {
        name: "Ar Condicionado Cassete Midea 24.000 BTU",
        description: "Inverter, 220V. Para instalação em teto comercial.",
        price: 4299.9,
        stock: 3,
        category: "Ar Condicionado",
      },
      {
        name: "Ar Condicionado Piso Teto Fantastik 36.000 BTU",
        description: "Ciclo frio, 220V. Alto desempenho para galpões.",
        price: 5999.9,
        stock: 4,
        category: "Ar Condicionado",
      },
      {
        name: "Ar Condicionado Portátil Midea 12.000 BTU",
        description: "Sem necessidade de instalação fixa. 220V.",
        price: 2499.9,
        stock: 9,
        category: "Ar Condicionado",
      },

      // ─── Compressores (12) ────────────────────────────────────────────────
      {
        name: "QR-0337 - Compressor Scroll Copeland 36.000 BTU",
        description: "R-410A / R-32. Para ar-condicionado split comercial.",
        price: 4500.0,
        stock: 6,
        category: "Compressores",
      },
      {
        name: "QR-0398 - Compressor Rotativo 18.000 BTU",
        description: "R-410A. Compatível com splits residenciais.",
        price: 2800.0,
        stock: 10,
        category: "Compressores",
      },
      {
        name: "QR-0725 - Compressor Hermético Embraco 1/4+ HP",
        description: "R-134a. Para refrigeração comercial e doméstica.",
        price: 1250.0,
        stock: 15,
        category: "Compressores",
      },
      {
        name: "QR-0445 - Compressor Scroll Copeland 48.000 BTU",
        description: "R-410A. Ideal para sistemas VRF e chiller.",
        price: 5800.0,
        stock: 4,
        category: "Compressores",
      },
      {
        name: "QR-0556 - Compressor Rotativo Midea 9.000 BTU",
        description: "R-410A. Para reposição em splits residenciais.",
        price: 1750.0,
        stock: 12,
        category: "Compressores",
      },
      {
        name: "QR-0612 - Compressor Hermético Embraco 1/3 HP",
        description: "R-134a. Para geladeiras e câmaras frias.",
        price: 980.0,
        stock: 20,
        category: "Compressores",
      },
      {
        name: "QR-0710 - Compressor Scroll Danfoss 24.000 BTU",
        description: "R-22 / R-407C. Uso comercial e industrial.",
        price: 3600.0,
        stock: 5,
        category: "Compressores",
      },
      {
        name: "QR-0820 - Compressor Alternativo Tecumseh 1/2 HP",
        description: "R-134a. Para câmaras frigoríficas e balcões.",
        price: 1420.0,
        stock: 8,
        category: "Compressores",
      },
      {
        name: "QR-0933 - Compressor Rotativo LG 12.000 BTU",
        description: "R-410A. Substituto para splits LG Dual Inverter.",
        price: 2100.0,
        stock: 7,
        category: "Compressores",
      },
      {
        name: "QR-1045 - Compressor Scroll Copeland 60.000 BTU",
        description: "R-410A. Para sistemas de ar comercial de grande porte.",
        price: 7200.0,
        stock: 3,
        category: "Compressores",
      },
      {
        name: "QR-1120 - Compressor Hermético Embraco 1/5 HP",
        description: "R-600a. Para minigeladeiras e adegas.",
        price: 740.0,
        stock: 18,
        category: "Compressores",
      },
      {
        name: "QR-1230 - Compressor Rotativo Samsung 18.000 BTU",
        description: "R-410A. Para reposição em splits Samsung.",
        price: 2650.0,
        stock: 9,
        category: "Compressores",
      },

      // ─── Peças e Acessórios (12) ──────────────────────────────────────────
      {
        name: "Placa Eletrônica Split Midea 9.000 a 12.000 BTU",
        description: "Placa da unidade interna. Compatível com modelos 2020-2024.",
        price: 420.0,
        stock: 20,
        category: "Peças e Acessórios",
      },
      {
        name: "Ventilador Evaporador Split 9.000 BTU",
        description: "Motor completo com hélice. Universal para splits.",
        price: 185.0,
        stock: 25,
        category: "Peças e Acessórios",
      },
      {
        name: "Condensador Ar Condicionado 12.000 BTU",
        description: "Serpentina de cobre com aletas de alumínio.",
        price: 560.0,
        stock: 10,
        category: "Peças e Acessórios",
      },
      {
        name: "Evaporador Ar Condicionado 9.000 BTU",
        description: "Serpentina completa para unidade interna split.",
        price: 390.0,
        stock: 12,
        category: "Peças e Acessórios",
      },
      {
        name: "Válvula de Expansão Termostática R-410A",
        description: "Para sistemas de 9.000 a 24.000 BTU.",
        price: 145.0,
        stock: 30,
        category: "Peças e Acessórios",
      },
      {
        name: "Filtro Secador 3/8 Bi-fluxo Chemours",
        description: "Para sistemas com R-22, R-410A e R-134a.",
        price: 38.9,
        stock: 100,
        category: "Peças e Acessórios",
      },
      {
        name: "Capacitor de Partida 35+5 µF 380V",
        description: "Para compressores e motores de ventilador.",
        price: 28.5,
        stock: 80,
        category: "Peças e Acessórios",
      },
      {
        name: "Presostato Alta e Baixa Pressão Universal",
        description: "Proteção contra variações de pressão no sistema.",
        price: 75.0,
        stock: 40,
        category: "Peças e Acessórios",
      },
      {
        name: "Cabo de Cobre Flexível 1,5mm 10m",
        description: "Para ligações elétricas em instalações de ar.",
        price: 54.9,
        stock: 60,
        category: "Peças e Acessórios",
      },
      {
        name: "Suporte para Condensadora Split Pequeno",
        description: "Aço galvanizado, capacidade até 120kg.",
        price: 89.9,
        stock: 35,
        category: "Peças e Acessórios",
      },
      {
        name: "Mangueira de Dreno 5/8\" 5 metros",
        description: "PVC flexível para escoamento de condensado.",
        price: 22.9,
        stock: 90,
        category: "Peças e Acessórios",
      },
      {
        name: "Gás Refrigerante R-410A 750g (Lata)",
        description: "Chemours. Para recarga de sistemas residenciais.",
        price: 129.9,
        stock: 50,
        category: "Peças e Acessórios",
      },

      // ─── Purificadores (8) ────────────────────────────────────────────────
      {
        name: "Purificador de Água IBBL FR600 Natural",
        description: "Sem compressor, filtragem natural por gravidade. Branco.",
        price: 890.0,
        stock: 14,
        category: "Purificadores",
      },
      {
        name: "Purificador de Água IBBL Due Inox",
        description: "Com compressor, água fria e natural. Inox.",
        price: 1490.0,
        stock: 8,
        category: "Purificadores",
      },
      {
        name: "Purificador de Água IBBL Evolux",
        description: "Filtro 5 estágios, com compressor. Branco.",
        price: 1890.0,
        stock: 6,
        category: "Purificadores",
      },
      {
        name: "Purificador de Água Fantastik Ultra 3 Temperaturas",
        description: "Quente, fria e natural. Filtro UltraViolet.",
        price: 1250.0,
        stock: 10,
        category: "Purificadores",
      },
      {
        name: "Purificador de Água Fantastik Slim Gelado",
        description: "Compacto, fria e natural. Filtro carvão ativado.",
        price: 790.0,
        stock: 12,
        category: "Purificadores",
      },
      {
        name: "Refil Filtro IBBL FR600 (Par)",
        description: "Par de refis originais para FR600 e similares.",
        price: 129.9,
        stock: 45,
        category: "Purificadores",
      },
      {
        name: "Refil Filtro Carvão Fantastik (2 unidades)",
        description: "Compatível com toda linha Fantastik.",
        price: 89.9,
        stock: 60,
        category: "Purificadores",
      },
      {
        name: "Osmose Reversa Residencial 5 Estágios 75 GPD",
        description: "Água ultrapurificada. Inclui reservatório 10L.",
        price: 2190.0,
        stock: 5,
        category: "Purificadores",
      },

      // ─── Ferramentas (8) ──────────────────────────────────────────────────
      {
        name: "Manifold Digital para Ar Condicionado R-410A/R-22",
        description: "2 vias com display LCD. Mede alta e baixa pressão.",
        price: 389.9,
        stock: 15,
        category: "Ferramentas",
      },
      {
        name: "Bomba de Vácuo 2 Estágios 1/3 HP 4 CFM",
        description: "Para esvaziamento de sistemas de refrigeração.",
        price: 649.9,
        stock: 8,
        category: "Ferramentas",
      },
      {
        name: "Alicate Amperímetro Digital AC/DC",
        description: "True RMS, com medição de temperatura. Categoria III.",
        price: 275.0,
        stock: 20,
        category: "Ferramentas",
      },
      {
        name: "Detector de Gás Refrigerante Universal",
        description: "Detecta R-22, R-134a, R-410A e outros HFCs.",
        price: 199.9,
        stock: 18,
        category: "Ferramentas",
      },
      {
        name: "Termômetro Infravermelho Digital -50°C a 380°C",
        description: "Laser ponteiro, leitura instantânea, sem contato.",
        price: 119.9,
        stock: 30,
        category: "Ferramentas",
      },
      {
        name: "Flangeador Excêntrico para Cobre 1/4\" a 3/4\"",
        description: "Aço inox, para tubulações de cobre de refrigeração.",
        price: 185.0,
        stock: 12,
        category: "Ferramentas",
      },
      {
        name: "Cortador de Tubo de Cobre 1/4\" a 1-1/8\"",
        description: "Corte limpo, sem rebarbas. Cabo giratório.",
        price: 68.9,
        stock: 25,
        category: "Ferramentas",
      },
      {
        name: "Kit Dobrador de Tubo Cobre 1/4\" a 3/4\"",
        description: "4 peças. Para curvas sem amassamento.",
        price: 245.0,
        stock: 10,
        category: "Ferramentas",
      },
    ],
  });

  console.log(`✅ ${products.length} products created.`);

  const getProduct = (name: string) => {
    const p = products.find((prod) => prod.name.includes(name));
    if (!p) throw new Error(`Product not found: ${name}`);
    return p;
  };

  const orders = [
    {
      status: "completed",
      items: [
        { product: getProduct("QR-0337"), quantity: 1 },
        { product: getProduct("Filtro Secador"), quantity: 2 },
      ],
    },
    {
      status: "completed",
      items: [
        { product: getProduct("Purificador de Água IBBL FR600"), quantity: 1 },
        { product: getProduct("Refil Filtro IBBL"), quantity: 1 },
      ],
    },
    {
      status: "completed",
      items: [
        { product: getProduct("Manifold Digital"), quantity: 1 },
        { product: getProduct("Bomba de Vácuo"), quantity: 1 },
      ],
    },
    {
      status: "processing",
      items: [
        { product: getProduct("Ar Condicionado Split Midea 12.000"), quantity: 1 },
        { product: getProduct("Suporte para Condensadora"), quantity: 2 },
        { product: getProduct("Mangueira de Dreno"), quantity: 1 },
      ],
    },
    {
      status: "pending",
      items: [
        { product: getProduct("QR-0725"), quantity: 2 },
        { product: getProduct("Capacitor de Partida"), quantity: 3 },
      ],
    },
  ];

  for (const order of orders) {
    let total = 0;
    const orderItemsData = order.items.map(({ product, quantity }) => {
      total += product.price * quantity;
      return {
        productId: product.id,
        quantity,
        price: product.price,
      };
    });

    await prisma.order.create({
      data: {
        userId: user.id,
        total,
        status: order.status,
        orderItems: { create: orderItemsData },
      },
    });
  }

  console.log(`✅ 5 orders created for ${user.email}.`);
  console.log("");
  console.log("🎉 Seed complete!");
  console.log("");
  console.log("  Admin  → admin@galinho.com.br  / admin123");
  console.log("  User   → joao@example.com      / user123");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
