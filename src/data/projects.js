export const projects = [
    {
        slug: "localizacion-venezolana",
        title: "Suite de Localización Venezolana Odoo v18",
        category: "Fiscal & Contabilidad",
        featured: true,
        year: "2025 - Presente",
        client: "TECNODOO C.A",
        description: "Suite integral de herramientas contables y fiscales adaptadas a la normativa legal vigente del SENIAT para Odoo v18.",
        fullDescription: "Implementación integral y avanzada de los requerimientos fiscales exigidos por el SENIAT para el funcionamiento normativo de Odoo en Venezuela. La solución automatiza el ciclo de retenciones impositivas, la generación de libros contables obligatorios y la emisión de archivos estructurados TXT y XML para la declaración mensual ante el ente regulador.",
        image: "/odoo/tecnodoo-localizacion-ven-18.odoo.com.png",
        tags: ["Odoo v18", "Python", "SENIAT", "PostgreSQL", "XML/QWeb", "Fiscal"],
        features: [
            "Generación automática de Libros de Compras y Ventas normados por el SENIAT",
            "Manejo y emisión de comprobantes de retención de IVA e ISLR en formato QWeb",
            "Gestión automatizada de retenciones de IGTF y Retenciones Municipales",
            "Generación y exportación de archivos TXT para IVA y archivos XML para ISLR",
            "Generación de listado de relación anual de retenciones ISLR AR-CV",
            "Configuración y control estricto de números de control fiscal consecutivos"
        ],
        metrics: [
            { label: "Cumplimiento Fiscal", value: "100% SENIAT" },
            { label: "Tiempo de Cierre Mensual", value: "-70%" }
        ],
        videoUrl: "https://drive.google.com/file/d/1BTIFBf1CRLjPiCEAdx2bNsUqtrX1bTNG/view?usp=sharing"
    },
    {
        slug: "dualidad-monedas",
        title: "Módulo de Dualidad de Monedas (VES / USD)",
        category: "Finanzas & Multimoneda",
        featured: true,
        year: "2025 - Presente",
        client: "TECNODOO C.A",
        description: "Desarrollo de módulo financiero para Odoo v18 con soporte para multimoneda y actualización automática de tasas BCV.",
        fullDescription: "Solución robusta para gestionar la dualidad de monedas en la economía venezolana dentro de Odoo v18. Permite a las empresas operar sin fricción en dólares estadounidenses (USD) y bolívares (VES), sincronizando tasas de cambio oficiales y recalculando importes en tiempo real según la fecha contable del comprobante.",
        image: "/odoo/tecnodoo-localizacion-dual-ven-18.odoo.com.png",
        tags: ["Odoo v18", "Python", "Multimoneda", "BCV", "Finanzas"],
        features: [
            "Conexión y sincronización automática de la tasa oficial del Banco Central de Venezuela (BCV)",
            "Visualización simultánea de importes en USD y VES en cotizaciones, compras, facturas y asientos",
            "Actualización dinámica de la tasa de conversión según la fecha de operación o emisión",
            "Emisión de reportes financieros y estados de cuenta en doble moneda con trazabilidad total",
            "Manejo automático de pérdidas o ganancias por diferencial cambiario"
        ],
        metrics: [
            { label: "Precisión Cambiaria", value: "En Tiempo Real" },
            { label: "Módulos Integrados", value: "Ventas, Compras, Facturación" }
        ],
        videoUrl: "https://drive.google.com/file/d/1txg6eBniIdDGrDGSKZTMRXlBZ7ivhmMM/view?usp=sharing"
    },
    {
        slug: "modulo-importaciones-odoo",
        title: "Módulo de Gestión y Costeo de Importaciones",
        category: "Operaciones & Logística",
        featured: true,
        year: "2024 - 2025",
        client: "AGRORUEDAS CHAKAO C.A",
        description: "Sistema integral para la gestión logística, rastreo de embarques y costeo en destino (landed costs) en Odoo v13 y v17.",
        fullDescription: "Desarrollo y consultoría funcional para el seguimiento de órdenes de compra internacionales y embarques. Centraliza la asignación de aranceles aduanales, fletes marítimos/aéreos y gastos de nacionalización, distribuyéndolos de forma proporcional sobre el inventario para determinar el costo exacto y real puesto en almacén.",
        image: "/odoo/importaciones-odoo.png",
        tags: ["Odoo v17", "Odoo v13", "Python", "Landed Costs", "Compras & Inventario"],
        features: [
            "Rastreo integral de embarques, contenedores y estados aduaneros",
            "Cálculo automático y prorrateo de costos en destino (Landed Costs)",
            "Distribución precisa de fletes, aranceles e impuestos portuarios por ítem",
            "Actualización en tiempo real del costo unitario en las capas de valoración de inventario",
            "Reportes analíticos de proyección de costos y márgenes de utilidad"
        ],
        metrics: [
            { label: "Precisión de Costeo", value: "Exactitud 100%" },
            { label: "Trazabilidad", value: "Extremo a Extremo" }
        ],
        videoUrl: ""
    },
    {
        slug: "personalizacion-facturacion",
        title: "Personalización de Facturación & Pasarela Cashea",
        category: "Facturación & Pagos",
        featured: false,
        year: "2024 - 2025",
        client: "AGRORUEDAS CHAKAO C.A",
        description: "Adaptación del flujo de facturación electrónica para integración con la app Cashea y validaciones fiscales SENIAT.",
        fullDescription: "Optimización profunda del proceso de facturación en Odoo v17. Se personalizó la arquitectura de cobros para permitir el registro estructurado de pagos iniciales y cuotas asociadas al ecosistema Cashea, junto con la validación de RIF en línea y la generación de formatos de factura fiscal personalizados.",
        image: "/odoo/facturacion-odoo.png",
        tags: ["Odoo v17", "Python", "Cashea", "Facturación", "SENIAT"],
        features: [
            "Integración del método de pago Cashea con desglose de cuotas y abono inicial",
            "Validación automática de RIF y estatus de contribuyente en tiempo real",
            "Diseño de formatos de impresión QWeb para facturas fiscales y notas de crédito",
            "Control y bloqueo ante discrepancias contables o datos fiscales erróneos"
        ],
        metrics: [
            { label: "Agilidad en Caja", value: "3x Más Rápido" },
            { label: "Errores de Facturación", value: "0% Discrepancia" }
        ],
        videoUrl: ""
    }
];
