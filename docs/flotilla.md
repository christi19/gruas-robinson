# Flotilla: revisión editorial y metadatos

Fuente: proyecto `gruasrobinson-com`, carpeta `flotilla` de Medios. Revisión visual: 3 de noviembre de 2026. Las seis fotos no prueban que sean seis unidades distintas.

## Criterio

Mostrar opciones con foto completa, nombre y descripción breve, sin año. Los usos son orientativos; peso, dimensiones, acceso, equipo y disponibilidad se confirman con el operador antes de asignar una unidad. No se publican toneladas ni capacidades deducidas de una foto frontal.

| Foto / ID de Medios (prefijo) | Nombre público | Evidencia del modelo | Orientación de la consulta |
| --- | --- | --- | --- |
| grua-unidad-02 / b67057 | Hino 300 | Emblema Hino y número 300 visibles; plataforma detrás de la cabina. | Automóviles, SUV y pick-ups, sujetos a medidas y peso. |
| camion-grua-plataforma-isuzu-forward / 0775fc | Isuzu Forward | Identificado así en el catálogo original de Medios; plataforma visible. La foto no permite leer el modelo. | Automóviles y vehículos comerciales livianos, sujetos a medidas y peso. |
| camion-grua-hino-500-robinson / e74871 | Hino 500 | Marca Hino y número 500 visibles. La toma frontal no muestra la plataforma. | Consultar por busetas y microbuses; confirmar configuración y capacidad. |
| grua-unidad-03 / bcc224 | Plataforma de cabina amplia | Plataforma visible. Marca y modelo no legibles; no se asignan por similitud. | Automóviles y 4x4, sujetos a medidas y peso. |
| grua-unidad-01 / f009c6 | Plataforma para traslados | Plataforma visible al costado. Marca y modelo no legibles. | Traslados a taller o entre localidades; consultar por su vehículo. |
| grua-unidad-04 / 517508 | Isuzu ELF | Emblemas Isuzu y ELF visibles; equipo de trabajo transportado detrás. No se deduce una variante NPR/NQR. | Maquinaria y equipos, sujetos a dimensiones, peso y acceso. |

Cada imagen incorporada al HTML conserva la URL exacta y dimensiones devueltas por Medios, un `alt` descriptivo y metadatos semánticos `ImageObject`. Los enlaces de consulta identifican la foto y el modelo o nombre público sin prometer una reserva.

## Plan de implementación

- [x] Revisar una por una las seis fotos y consolidar este catálogo.
- [ ] Añadir `#flotilla` antes de los trabajos realizados, reutilizando paleta y geometría de marca; cuadrícula de una, dos o tres columnas.
- [ ] Conservar las fotos enteras con `object-fit: contain`, dimensiones explícitas, carga diferida y texto alternativo; lectura y consultas disponibles sin JavaScript.
- [ ] Verificar a 360, 768, 1024 y 1440 px, teclado, carga de fotos, metadatos y mensajes de WhatsApp; probar menú, formulario y preguntas existentes.
- [ ] Consolidar por separado catálogo y sección, publicar en GitHub Pages y comprobar la URL pública.

Punto de retorno: `c107591d64a8053e84b8c9e1fa6c6f3ef898a179`, rama `codex/respaldo-antes-flotilla-20261103`. El proyecto es estático: no tiene `package.json` ni TypeScript; los controles aplicables son integridad HTML/CSS, `node --check script.js` y pruebas de navegador.
