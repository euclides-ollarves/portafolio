export const projects = [
    {
        slug: "modulo-importaciones-odoo",
        title: "Módulo de Importaciones Odoo",
        description: "Implementación y asesoría del módulo de importaciones permitiendo el rastreo y costeo de embarques.",
        fullDescription: "Este proyecto consistió en la creación de un sistema integral de seguimiento para importaciones. Se integraron cálculos de aranceles, costos de flete y gastos de nacionalización para obtener el costo real del producto puesto en almacén.",
        image: "/odoo/importaciones-odoo.png",
        tags: ["Odoo v17", "Importaciones", "Compras"],
        features: ["Cálculo automático de costos en destino", "Reportes de proyección de costos"],
        videoUrl: ""
    },
    {
        slug: "dualidad-monedas",
        title: "Dualidad de Monedas",
        description: "Desarrollo de módulo para localización venezolana con soporte para multimoneda y tasas de cambio automáticas.",
        fullDescription: "Desarrollo de una solución robusta para manejar la dualidad de monedas (VES/USD) en todos los módulos contables de Odoo. Incluye reexpresión de estados financieros y gestión de diferencial cambiario automático.",
        image: "/odoo/tecnodoo-localizacion-dual-ven-18.odoo.com.png",
        tags: ["Odoo v18", "Finanzas", "VES/USD"],
        features: [
            "Tasa de cambio BCV automática",
            "Visualización de ordenes de ventas, compras, facturas y asientos contables en ambas monedas",
            "Actualizacion de la tasa segun la fecha seleccionada en los modulos de, ventas, compras y facturas",
            "Reportes en ambas monedas"
        ],
        videoUrl: "https://drive.google.com/file/d/1txg6eBniIdDGrDGSKZTMRXlBZ7ivhmMM/view?usp=sharing"
    },
    {
        slug: "personalizacion-facturacion",
        title: "Personalización de Facturación",
        description: "Adaptación del flujo de facturación para integrar pagos móviles y retenciones legales.",
        fullDescription: "Optimización del proceso de facturación electrónica y física para cumplir con las normativas del SENIAT. Se integraron módulos de retención de IVA e IGTF de forma transparente para el usuario final.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop",
        tags: ["Odoo v17", "Contabilidad"],
        features: ["Generación de comprobantes de retención", "Validación de RIF en tiempo real", "Formatos de factura personalizados"],
        videoUrl: ""
    },
    {
        slug: "localizacion-venezolana",
        title: "Localización Venezolana",
        description: "Suite completa de herramientas contables y fiscales adaptadas a la normativa legal vigente de Venezuela.",
        fullDescription: "Implementación integral de los requerimientos exigidos por el SENIAT para el correcto funcionamiento de Odoo en Venezuela. Este módulo centraliza los libros de IVA, retenciones, IGTF y la generación de archivos TXT para la declaración mensual.",
        image: "/odoo/tecnodoo-localizacion-ven-18.odoo.com.png",
        tags: ["Odoo v18", "Fiscal", "Venezuela"],
        features: [
            "Libros de compra y venta",
            "Manejo de retenciones de IVA",
            "Manejo de retenciones de ISLR",
            "Manejo de retenciones de IGTF",
            "Manejo de retenciones Municipales",
            "Generación de archivos TXT para IVA",
            "Generación de archivos XML para ISLR",
            "Generación de listado ISLR AR-CV",
            "Configuración para numeros de control automaticos"
        ],
        videoUrl: "https://drive.google.com/file/d/1BTIFBf1CRLjPiCEAdx2bNsUqtrX1bTNG/view?usp=sharing"
    }
];
