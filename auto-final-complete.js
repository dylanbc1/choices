// ============================================
// SCRIPT AUTOMÁTICO PARA FORMULARIO MÉDICO COMPLETO
// Todas las páginas - Primera página + 4 páginas adicionales
// ============================================

(function() {
    'use strict';
    
    // Mapeo de categorías médicas con sus opciones (basado en el JSON proporcionado)
    const categoriasMedicas = {
        1: { // ENFERMEDADES INFECCIOSAS (A y B)
            id: "rc83969ce60c842f5adeb84b5bffc55fd",
            opciones: [
                "INFECCION INTESTINAL BACTERIANA, NO ESPECIFICADA",
                "INFECCION VIRAL DEL SISTEMA NERVIOSO CENTRAL, NO ESPECIFICADA",
                "RINOFARINGITIS AGUDA (RESFRIADO COMUN)",
                "GASTROENTERITIS VIRAL, SIN OTRA ESPECIFICACION"
            ]
        },
        2: { // NEOPLASIAS (C)
            id: "r0313297517a94ee5a7398e90fff4b6f3",
            opciones: [
                "TUMOR BENIGNO DE LA PIEL, SITIO NO ESPECIFICADO",
                "NEVO MELANOCITICO, SITIO NO ESPECIFICADO"
            ]
        },
        3: { // TRASTORNOS DE LA SANGRE (D)
            id: "r0a6eab86d9c843b2bde7a5884e427762",
            opciones: [
                "ANEMIA POR DEFICIENCIA DE HIERRO SIN OTRA ESPECIFICACION",
                "ANEMIA DE TIPO NO ESPECIFICADO"
            ]
        },
        4: { // ENFERMEDADES ENDOCRINAS (E)
            id: "r3d602339fb364d35b0397d7b4167213d",
            opciones: [
                "DIABETES MELLITUS NO INSULINODEPENDIENTE SIN MENCION DE COMPLICACION",
                "HIPOTIROIDISMO, NO ESPECIFICADO",
                "OBESIDAD, NO ESPECIFICADA"
            ]
        },
        5: { // ENFERMEDADES MENTALES (F)
            id: "racedd8fbddbf4c3fa99906910472d928",
            opciones: [
                "EPISODIO DEPRESIVO LEVE",
                "TRASTORNO DE ANSIEDAD GENERALIZADA",
                "INSOMNIO NO ORGANICO"
            ]
        },
        6: { // SISTEMA NERVIOSO (G)
            id: "r2dd9de331a574459a2349f07c1398bea",
            opciones: [
                "CEFALEA DEBIDA A TENSION",
                "CEFALEA VASCULAR, NCOP",
                "MIGRAÑA SIN AURA [MIGRAÑA COMUN]"
            ]
        },
        7: { // OJO Y OÍDO (H)
            id: "r89aa10589190430aacd16243efafb9ad",
            opciones: [
                "MIOPIA",
                "HIPOACUSIA, NO ESPECIFICADA",
                "CONJUNTIVITIS AGUDA, NO ESPECIFICADA"
            ]
        },
        8: { // SISTEMA CIRCULATORIO (I)
            id: "rba5658b109cb4465bdc2dbc4b06347bc",
            opciones: [
                "HIPERTENSION ESENCIAL (PRIMARIA)",
                "PALPITACIONES",
                "HEMORROIDES NO ESPECIFICADAS, SIN COMPLICACION"
            ]
        },
        9: { // SISTEMA RESPIRATORIO (J)
            id: "rfbb3411c08db4a6c82b5d3c4f06037a0",
            opciones: [
                "RINOFARINGITIS AGUDA (RESFRIADO COMUN)",
                "FARINGITIS AGUDA, NO ESPECIFICADA",
                "RINITIS ALERGICA, NO ESPECIFICADA",
                "BRONQUITIS AGUDA, NO ESPECIFICADA"
            ]
        },
        10: { // SISTEMA DIGESTIVO (K)
            id: "r75cbb3da217842438980ba9caa2aa993",
            opciones: [
                "DISPEPSIA",
                "GASTRITIS, NO ESPECIFICADA",
                "CONSTIPACION",
                "DIARREA FUNCIONAL"
            ]
        },
        11: { // PIEL Y TEJIDO SUBCUTÁNEO (L)
            id: "r28e8660ab2b547c38afd0d928f9e2170",
            opciones: [
                "DERMATITIS ATOPICA, NO ESPECIFICADA",
                "ACNE VULGAR",
                "URTICARIA, NO ESPECIFICADA"
            ]
        },
        12: { // SISTEMA OSTEOMUSCULAR (M)
            id: "rebbd12350a374ecca5f77c0e17718f33",
            opciones: [
                "DOLOR EN ARTICULACION",
                "DOLOR EN MIEMBRO",
                "LUMBAGO NO ESPECIFICADO",
                "CERVICALGIA"
            ]
        },
        13: { // APARATO GENITOURINARIO (N)
            id: "rfed834ef89cc4f85927230d6eea7027a",
            opciones: [
                "INFECCION DE VIAS URINARIAS, SITIO NO ESPECIFICADO",
                "DISMENORREA, NO ESPECIFICADA",
                "CISTITIS, NO ESPECIFICADA"
            ]
        },
        14: { // EMBARAZO, PARTO Y PUERPERIO (O) - Raramente se llena
            id: "r4aba5d34c235486eb393364bf2c8d32f",
            opciones: []
        },
        15: { // PERIODO PERINATAL (P) - Raramente se llena
            id: "rc7d8e03b5c694f41875ee79e0941a8fc",
            opciones: []
        },
        16: { // MALFORMACIONES CONGÉNITAS (Q) - Raramente se llena
            id: "r0535f0273d524618a9bd722fafb534fe",
            opciones: []
        },
        17: { // SÍNTOMAS Y SIGNOS (R)
            id: "r2e770e591aa74e689f686f85e4a27436",
            opciones: [
                "CEFALEA",
                "MALESTAR Y FATIGA",
                "MAREO Y DESVANECIMIENTO",
                "FIEBRE, NO ESPECIFICADA",
                "DOLOR, NO ESPECIFICADO"
            ]
        },
        18: { // TRAUMATISMOS (S y T)
            id: "rac5c9d3218c24c03b5352e9e8f5cee97",
            opciones: [
                "CONTUSION DEL HOMBRO Y DEL BRAZO",
                "CONTUSION DE LA RODILLA",
                "HERIDA DEL CUERO CABELLUDO"
            ]
        },
        19: { // CAUSAS EXTERNAS (V y Y) - Raramente se llena
            id: "r8aa6d4946c3545d084a08aad2980c682",
            opciones: []
        },
        20: { // FACTORES DE SALUD (Z)
            id: "r4d2c8cebe20f467d9ea81202604abe30",
            opciones: [
                "EXAMEN MEDICO GENERAL",
                "CONSULTA, NO ESPECIFICADA",
                "CONTROL GENERAL DE SALUD DE RUTINA",
                "ATENCION MEDICA, NO ESPECIFICADA"
            ]
        }
    };

    // Configuración de las páginas adicionales
    const paginasAdicionales = {
        pagina2: {
            preguntas: {
                21: {
                    tipo: "dropdown",
                    labelledby: "QuestionId_rd2b7c10c5013449cb6dbeed9392df93d QuestionInfo_rd2b7c10c5013449cb6dbeed9392df93d",
                    opciones: ["Consulta externa", "Consulta de urgencias", "Evolución de paciente hospitalizado"],
                    seleccion: "aleatoria"
                },
                22: {
                    tipo: "dropdown",
                    labelledby: "QuestionId_rc06c2704ed22459c98f0a7214f05ec2e QuestionInfo_rc06c2704ed22459c98f0a7214f05ec2e",
                    opciones: [
                        "Clínica Palmira",
                        "ESE Oriente (Hospital Carlos Holmes Trujillo, Calipso)",
                        "Fundación Valle del Lili Sede Limonar",
                        "Fundación Valle del Lili Sede Principal",
                        "Fundación Valle del Lili Sede Tequendama",
                        "Hospital Raúl Orejuela Bueno sede Principal",
                        "Hospital Raúl Orejuela Bueno sede La Emilia",
                        "Hospital San Juan de Dios"
                    ],
                    seleccion: "aleatoria"
                },
                23: {
                    tipo: "radio",
                    labelledby: "QuestionId_rf1880ca54ea54448a814dd78861dc850 QuestionInfo_rf1880ca54ea54448a814dd78861dc850",
                    valor: "5" // Siempre 5 estrellas
                },
                24: {
                    tipo: "dropdown",
                    labelledby: "QuestionId_ra7009db834874dd4b8da0f1273d9fe91 QuestionInfo_ra7009db834874dd4b8da0f1273d9fe91",
                    opciones: ["Bitácora clínica 1 (6 semestre)"],
                    seleccion: "fija"
                }
            }
        },
        pagina3: {
            preguntas: {
                25: {
                    tipo: "dropdown",
                    labelledby: "QuestionId_r72f2638b01fa44b39db1bdcbb29a0755 QuestionInfo_r72f2638b01fa44b39db1bdcbb29a0755",
                    opciones: ["A00399276"],
                    seleccion: "fija"
                }
            }
        },
        pagina4: {
            preguntas: {
                26: {
                    tipo: "radio",
                    labelledby: "QuestionId_rcbdd1ceb03604dc3b96667d9bfb9c252 QuestionInfo_rcbdd1ceb03604dc3b96667d9bfb9c252",
                    valor: "6"
                },
                27: {
                    tipo: "radio",
                    labelledby: "QuestionId_r2bb10825c5c34ea091c006929acc7c9d QuestionInfo_r2bb10825c5c34ea091c006929acc7c9d",
                    valor: "6"
                },
                28: {
                    tipo: "radio",
                    labelledby: "QuestionId_r04e048f805d94ba284645850bf25d3f5 QuestionInfo_r04e048f805d94ba284645850bf25d3f5",
                    valor: "6"
                },
                29: {
                    tipo: "radio",
                    labelledby: "QuestionId_rc08619b529484eb29215348ba292c6c7 QuestionInfo_rc08619b529484eb29215348ba292c6c7",
                    valor: "6"
                },
                30: {
                    tipo: "radio",
                    labelledby: "QuestionId_r98fc6df30c2a436797f7016c46db7ce1 QuestionInfo_r98fc6df30c2a436797f7016c46db7ce1",
                    valor: "6"
                },
                31: {
                    tipo: "radio",
                    labelledby: "QuestionId_rfaf714c4481f45f4805aed6890540286 QuestionInfo_rfaf714c4481f45f4805aed6890540286",
                    valor: "6"
                },
                32: {
                    tipo: "radio",
                    labelledby: "QuestionId_r908224df2ff94b4498cd897e1d260870 QuestionInfo_r908224df2ff94b4498cd897e1d260870",
                    valor: "6"
                },
                33: {
                    tipo: "radio",
                    labelledby: "QuestionId_rc24bad3a8b72497e9c8ee7dfe72213ab QuestionInfo_rc24bad3a8b72497e9c8ee7dfe72213ab",
                    valor: "6"
                },
                34: {
                    tipo: "radio",
                    labelledby: "QuestionId_r0de2eedf33a0412db398c86ba0f457e3 QuestionInfo_r0de2eedf33a0412db398c86ba0f457e3",
                    valor: "1"
                },
                35: {
                    tipo: "radio",
                    labelledby: "QuestionId_r9bdb5add7c3d4ee79bb35aa6ce8bb85e QuestionInfo_r9bdb5add7c3d4ee79bb35aa6ce8bb85e",
                    valor: "1"
                },
                36: {
                    tipo: "radio",
                    labelledby: "QuestionId_r03fb07364ba840a0be61f5c60236c09e QuestionInfo_r03fb07364ba840a0be61f5c60236c09e",
                    valor: "1"
                },
                37: {
                    tipo: "radio",
                    labelledby: "QuestionId_r383e832a3e5f459db4a858111498068d QuestionInfo_r383e832a3e5f459db4a858111498068d",
                    valor: "6"
                },
                38: {
                    tipo: "radio",
                    labelledby: "QuestionId_re87671d222534b6a80e93610ac5388fa QuestionInfo_re87671d222534b6a80e93610ac5388fa",
                    valor: "6"
                },
                39: {
                    tipo: "radio",
                    labelledby: "QuestionId_rae5fef55c17149b9b2be2891b1c92950 QuestionInfo_rae5fef55c17149b9b2be2891b1c92950",
                    valor: "6"
                },
                40: {
                    tipo: "radio",
                    labelledby: "QuestionId_r4caba304fb394c02874d9a8ad63ab7e6 QuestionInfo_r4caba304fb394c02874d9a8ad63ab7e6",
                    valor: "6"
                },
                41: {
                    tipo: "radio",
                    labelledby: "QuestionId_r38537a1ca1a64ef1bb99daf6bd80bd18 QuestionInfo_r38537a1ca1a64ef1bb99daf6bd80bd18",
                    valor: "6"
                },
                42: {
                    tipo: "radio",
                    labelledby: "QuestionId_ra1e542d89d0a4c3daa2f6f997a367c93 QuestionInfo_ra1e542d89d0a4c3daa2f6f997a367c93",
                    valor: "1"
                },
                43: {
                    tipo: "radio",
                    labelledby: "QuestionId_r91c3c0162e604f48a7743266b1b321af QuestionInfo_r91c3c0162e604f48a7743266b1b321af",
                    valor: "6"
                },
                44: {
                    tipo: "radio",
                    labelledby: "QuestionId_r161f6679865848f9ab07fee563fc619d QuestionInfo_r161f6679865848f9ab07fee563fc619d",
                    valorTexto: "No considero necesario apoyo"
                }
            }
        }
    };

    // Patrones de casos clínicos comunes y realistas
    const casosClinicosComunes = [
        {
            nombre: "Infección Respiratoria Superior",
            probabilidad: 25,
            categorias: [1, 9, 17], // Infecciosas, Respiratorio, Síntomas
            opciones: {
                1: "RINOFARINGITIS AGUDA (RESFRIADO COMUN)",
                9: "RINOFARINGITIS AGUDA (RESFRIADO COMUN)",
                17: "FIEBRE, NO ESPECIFICADA"
            }
        },
        {
            nombre: "Consulta de Rutina",
            probabilidad: 20,
            categorias: [20], // Solo factores de salud
            opciones: {
                20: "EXAMEN MEDICO GENERAL"
            }
        },
        {
            nombre: "Cefalea/Migraña",
            probabilidad: 15,
            categorias: [6, 17], // Sistema nervioso, Síntomas
            opciones: {
                6: "CEFALEA DEBIDA A TENSION",
                17: "CEFALEA"
            }
        },
        {
            nombre: "Dolor Musculoesquelético",
            probabilidad: 12,
            categorias: [12, 17], // Osteomuscular, Síntomas
            opciones: {
                12: "LUMBAGO NO ESPECIFICADO",
                17: "DOLOR, NO ESPECIFICADO"
            }
        },
        {
            nombre: "Problemas Digestivos",
            probabilidad: 10,
            categorias: [10, 17], // Digestivo, Síntomas
            opciones: {
                10: "DISPEPSIA",
                17: "DOLOR, NO ESPECIFICADO"
            }
        },
        {
            nombre: "Hipertensión y Control",
            probabilidad: 8,
            categorias: [8, 20], // Circulatorio, Factores de salud
            opciones: {
                8: "HIPERTENSION ESENCIAL (PRIMARIA)",
                20: "ATENCION MEDICA, NO ESPECIFICADA"
            }
        },
        {
            nombre: "Ansiedad/Depresión Leve",
            probabilidad: 5,
            categorias: [5, 17], // Mental, Síntomas
            opciones: {
                5: "TRASTORNO DE ANSIEDAD GENERALIZADA",
                17: "MALESTAR Y FATIGA"
            }
        },
        {
            nombre: "Problemas Dermatológicos",
            probabilidad: 3,
            categorias: [11], // Piel
            opciones: {
                11: "DERMATITIS ATOPICA, NO ESPECIFICADA"
            }
        },
        {
            nombre: "Sin Diagnóstico Específico",
            probabilidad: 2,
            categorias: [], // Nada seleccionado
            opciones: {}
        }
    ];

    // Variable para rastrear el estado del formulario
    let estadoFormulario = {
        paginaActual: 1,
        casoSeleccionado: null,
        procesoCompleto: false
    };

    // ===================================================
    // TODAS LAS FUNCIONES DEFINIDAS AQUÍ PRIMERO
    // ===================================================

    // Función para seleccionar caso clínico basado en probabilidades
    function seleccionarCasoClinico() {
        const random = Math.random() * 100;
        let acumulado = 0;
        
        for (const caso of casosClinicosComunes) {
            acumulado += caso.probabilidad;
            if (random <= acumulado) {
                return caso;
            }
        }
        
        return casosClinicosComunes[casosClinicosComunes.length - 1]; // Por defecto el último
    }

    // Función para hacer clic en un dropdown y seleccionar una opción (primera página)
    function seleccionarOpcion(questionId, textoOpcion) {
        try {
            // Buscar el elemento dropdown
            const dropdown = document.querySelector(`[aria-describedby="${questionId}_placeholder_content"]`);
            if (!dropdown) {
                console.log(`No se encontró dropdown para ${questionId}`);
                return false;
            }

            // Hacer clic en el dropdown para abrirlo
            dropdown.click();
            
            // Esperar un poco para que se abra el menú
            setTimeout(() => {
                // Buscar la opción en el menú desplegable
                const opciones = document.querySelectorAll('[role="option"]');
                for (const opcion of opciones) {
                    if (opcion.textContent.includes(textoOpcion)) {
                        opcion.click();
                        console.log(`✓ Seleccionado: ${textoOpcion}`);
                        return true;
                    }
                }
                console.log(`✗ No se encontró la opción: ${textoOpcion}`);
                
                // Cerrar el dropdown si no se encontró la opción
                dropdown.click();
            }, 200);
            
        } catch (error) {
            console.error(`Error al seleccionar opción para ${questionId}:`, error);
            return false;
        }
    }

    // Función para seleccionar dropdown por aria-labelledby
    function seleccionarDropdownPorLabelledby(labelledby, textoOpcion) {
        try {
            console.log(`🔍 Buscando dropdown con labelledby: ${labelledby}`);
            
            // Estrategia 1: Buscar por aria-labelledby completo
            let dropdown = document.querySelector(`[aria-haspopup="listbox"][aria-labelledby="${labelledby}"]`);
            
            // Estrategia 2: Si no se encuentra, buscar por aria-labelledby que CONTENGA el ID principal
            if (!dropdown) {
                // Extraer el ID principal del labelledby (la primera parte antes del espacio)
                const idPrincipal = labelledby.split(' ')[0];
                console.log(`🔍 Buscando por ID principal: ${idPrincipal}`);
                
                dropdown = document.querySelector(`[aria-haspopup="listbox"][aria-labelledby*="${idPrincipal}"]`);
            }
            
            // Estrategia 3: Buscar por aria-describedby que contenga el ID
            if (!dropdown) {
                const idPrincipal = labelledby.split(' ')[0].replace('QuestionId_', '');
                const describedbyBuscado = `${idPrincipal}_placeholder_content`;
                console.log(`🔍 Buscando por aria-describedby: ${describedbyBuscado}`);
                
                dropdown = document.querySelector(`[aria-haspopup="listbox"][aria-describedby="${describedbyBuscado}"]`);
            }
            
            // Estrategia 4: Buscar cualquier dropdown que contenga parte del ID
            if (!dropdown) {
                const idLimpio = labelledby.replace('QuestionId_', '').replace('QuestionInfo_', '').split(' ')[0];
                console.log(`🔍 Buscando por ID limpio: ${idLimpio}`);
                
                const dropdowns = document.querySelectorAll('[aria-haspopup="listbox"]');
                for (const candidato of dropdowns) {
                    const ariaLabelledby = candidato.getAttribute('aria-labelledby') || '';
                    const ariaDescribedby = candidato.getAttribute('aria-describedby') || '';
                    
                    if (ariaLabelledby.includes(idLimpio) || ariaDescribedby.includes(idLimpio)) {
                        dropdown = candidato;
                        console.log(`✓ Encontrado dropdown por coincidencia de ID`);
                        break;
                    }
                }
            }

            if (!dropdown) {
                console.log(`❌ No se encontró dropdown con labelledby: ${labelledby}`);
                
                // Debug: mostrar todos los dropdowns disponibles
                const todosDropdowns = document.querySelectorAll('[aria-haspopup="listbox"]');
                console.log(`Debug - ${todosDropdowns.length} dropdowns disponibles:`);
                todosDropdowns.forEach((dd, index) => {
                    const labelledby = dd.getAttribute('aria-labelledby') || 'N/A';
                    const describedby = dd.getAttribute('aria-describedby') || 'N/A';
                    console.log(`  [${index}] labelledby="${labelledby.substring(0, 50)}..." describedby="${describedby}"`);
                });
                
                return false;
            }

            console.log(`✓ Dropdown encontrado, abriendo menú...`);
            dropdown.click();
            
            setTimeout(() => {
                // Buscar la opción en el menú desplegable
                const opciones = document.querySelectorAll('[role="option"]');
                console.log(`Buscando "${textoOpcion}" entre ${opciones.length} opciones...`);
                
                for (const opcion of opciones) {
                    const textoOpcionCompleto = opcion.textContent.trim();
                    if (textoOpcionCompleto === textoOpcion || textoOpcionCompleto.includes(textoOpcion)) {
                        opcion.click();
                        console.log(`✓ Dropdown seleccionado: ${textoOpcion}`);
                        return true;
                    }
                }
                
                console.log(`✗ No se encontró la opción en dropdown: ${textoOpcion}`);
                
                // Debug: mostrar opciones disponibles
                console.log("Opciones disponibles en el dropdown:");
                opciones.forEach((opcion, index) => {
                    console.log(`  [${index}] "${opcion.textContent.trim()}"`);
                });
                
                // Cerrar el dropdown si no se encuentra la opción
                dropdown.click();
            }, 300);
            
        } catch (error) {
            console.error(`Error al seleccionar dropdown:`, error);
            return false;
        }
    }

    // Función para seleccionar radio button por aria-labelledby y valor
    function seleccionarRadioPorLabelledby(labelledby, valor) {
        try {
            const radioGroup = document.querySelector(`[role="radiogroup"][aria-labelledby="${labelledby}"]`);
            if (!radioGroup) {
                console.log(`No se encontró radiogroup con labelledby: ${labelledby}`);
                return false;
            }

            // Buscar el radio button con el valor especificado
            const radioButtons = radioGroup.querySelectorAll('input[type="radio"]');
            for (const radio of radioButtons) {
                if (radio.value === valor || radio.getAttribute('aria-label') === valor) {
                    radio.click();
                    console.log(`✓ Radio seleccionado: ${valor}`);
                    return true;
                }
            }

            // Si no se encuentra por valor, buscar por texto en labels
            const labels = radioGroup.querySelectorAll('label');
            for (const label of labels) {
                if (label.textContent.includes(valor)) {
                    const radio = label.querySelector('input[type="radio"]') || 
                                 document.getElementById(label.getAttribute('for'));
                    if (radio) {
                        radio.click();
                        console.log(`✓ Radio seleccionado por texto: ${valor}`);
                        return true;
                    }
                }
            }

            console.log(`✗ No se encontró radio button con valor: ${valor}`);
            return false;
            
        } catch (error) {
            console.error(`Error al seleccionar radio button:`, error);
            return false;
        }
    }

    // Función para seleccionar radio button por texto específico
    function seleccionarRadioPorTexto(labelledby, textoValor) {
        try {
            const radioGroup = document.querySelector(`[role="radiogroup"][aria-labelledby="${labelledby}"]`);
            if (!radioGroup) {
                console.log(`No se encontró radiogroup con labelledby: ${labelledby}`);
                return false;
            }

            // Buscar por el texto exacto en las etiquetas
            const labels = radioGroup.querySelectorAll('label');
            for (const label of labels) {
                if (label.textContent.trim() === textoValor) {
                    const radio = label.querySelector('input[type="radio"]') || 
                                 document.getElementById(label.getAttribute('for'));
                    if (radio) {
                        radio.click();
                        console.log(`✓ Radio seleccionado por texto: ${textoValor}`);
                        return true;
                    }
                }
            }

            // Buscar por coincidencia parcial
            for (const label of labels) {
                if (label.textContent.includes(textoValor)) {
                    const radio = label.querySelector('input[type="radio"]') || 
                                 document.getElementById(label.getAttribute('for'));
                    if (radio) {
                        radio.click();
                        console.log(`✓ Radio seleccionado por coincidencia: ${textoValor}`);
                        return true;
                    }
                }
            }

            console.log(`✗ No se encontró radio button con texto: ${textoValor}`);
            return false;
            
        } catch (error) {
            console.error(`Error al seleccionar radio button por texto:`, error);
            return false;
        }
    }

    // Función específica para seleccionar números en divs (preguntas 26-43)
    function seleccionarNumeroPorLabelledby(labelledby, numeroSeleccionado) {
        try {
            console.log(`🔢 Intentando seleccionar número ${numeroSeleccionado} para pregunta...`);
            
            // Buscar el contenedor con aria-labelledby
            const contenedor = document.querySelector(`[aria-labelledby="${labelledby}"]`);
            if (!contenedor) {
                console.log(`No se encontró contenedor con aria-labelledby: ${labelledby}`);
                return false;
            }

            // Buscar dentro del contenedor todos los elementos que tengan aria-label con "Número seleccionado"
            const elementosNumero = contenedor.querySelectorAll('[aria-label*="Número seleccionado"]');
            console.log(`Encontrados ${elementosNumero.length} elementos con números`);

            // Estrategia 1: Buscar elemento que ya tenga el número correcto
            const ariaLabelBuscado = `Número seleccionado: ${numeroSeleccionado}`;
            for (const elemento of elementosNumero) {
                const ariaLabel = elemento.getAttribute('aria-label');
                if (ariaLabel === ariaLabelBuscado) {
                    elemento.click();
                    console.log(`✓ Número ${numeroSeleccionado} ya seleccionado o clickeado`);
                    return true;
                }
            }

            // Estrategia 2: Buscar todos los elementos clickeables en el contenedor (divs, buttons, etc.)
            const elementosClickeables = contenedor.querySelectorAll('div[role], button, [tabindex], [aria-label]');
            console.log(`Encontrados ${elementosClickeables.length} elementos clickeables`);

            // Buscar por texto, valor o posición que corresponda al número
            for (const elemento of elementosClickeables) {
                const texto = elemento.textContent.trim();
                const ariaLabel = elemento.getAttribute('aria-label') || '';
                const valor = elemento.getAttribute('value') || '';

                // Si el elemento contiene el número que buscamos
                if (texto === numeroSeleccionado || 
                    ariaLabel.includes(numeroSeleccionado) || 
                    valor === numeroSeleccionado) {
                    
                    elemento.click();
                    
                    // Verificar después del click
                    setTimeout(() => {
                        const elementosActualizados = contenedor.querySelectorAll('[aria-label*="Número seleccionado"]');
                        for (const el of elementosActualizados) {
                            const labelActual = el.getAttribute('aria-label');
                            if (labelActual === ariaLabelBuscado) {
                                console.log(`✓ Número ${numeroSeleccionado} seleccionado exitosamente (${labelActual})`);
                                return true;
                            }
                        }
                    }, 100);
                    
                    return true;
                }
            }

            // Estrategia 3: Buscar por posición (número 1 = primer elemento, número 6 = sexto elemento)
            const indice = parseInt(numeroSeleccionado) - 1;
            if (indice >= 0 && indice < elementosClickeables.length) {
                elementosClickeables[indice].click();
                console.log(`✓ Número ${numeroSeleccionado} seleccionado por posición (índice ${indice})`);
                return true;
            }

            console.log(`✗ No se pudo seleccionar número ${numeroSeleccionado}`);
            
            // Debug: mostrar elementos disponibles
            console.log("Debug - Elementos disponibles en el contenedor:");
            elementosClickeables.forEach((elemento, index) => {
                const texto = elemento.textContent.trim().substring(0, 20);
                const ariaLabel = elemento.getAttribute('aria-label') || 'N/A';
                const tagName = elemento.tagName.toLowerCase();
                console.log(`  [${index}] ${tagName}: texto="${texto}" aria-label="${ariaLabel.substring(0, 30)}"`);
            });
            
            return false;
            
        } catch (error) {
            console.error(`Error al seleccionar número:`, error);
            return false;
        }
    }

    // Función específica para seleccionar estrellas (pregunta 23)
    function seleccionarEstrellas(labelledby, numeroEstrellas) {
        try {
            console.log(`🌟 Intentando seleccionar ${numeroEstrellas} estrellas...`);
            
            const radioGroup = document.querySelector(`[role="radiogroup"][aria-labelledby="${labelledby}"]`);
            if (!radioGroup) {
                console.log(`No se encontró grupo de estrellas con labelledby: ${labelledby}`);
                return false;
            }

            // Estrategia principal: Buscar por aria-label específico para estrellas
            const ariaLabelBuscado = `${numeroEstrellas} Star`;
            console.log(`Buscando elemento con aria-label="${ariaLabelBuscado}"`);
            
            // Buscar el elemento con aria-label específico
            const elementoEstrella = radioGroup.querySelector(`[aria-label="${ariaLabelBuscado}"]`);
            
            if (elementoEstrella) {
                // Hacer clic en el elemento
                elementoEstrella.click();
                
                // Verificar que se seleccionó correctamente
                setTimeout(() => {
                    const ariaChecked = elementoEstrella.getAttribute('aria-checked');
                    if (ariaChecked === 'true') {
                        console.log(`✓ ¡${numeroEstrellas} estrellas seleccionadas exitosamente! (aria-checked=true)`);
                    } else {
                        console.log(`⚠️ Estrella clickeada pero aria-checked=${ariaChecked}`);
                    }
                }, 100);
                
                return true;
            }

            // Estrategia alternativa: buscar todos los elementos con aria-label que contengan "Star"
            console.log(`No se encontró "${ariaLabelBuscado}", buscando alternativas...`);
            
            const elementosEstrella = radioGroup.querySelectorAll('[aria-label*="Star"]');
            console.log(`Encontrados ${elementosEstrella.length} elementos con "Star"`);
            
            for (const elemento of elementosEstrella) {
                const ariaLabel = elemento.getAttribute('aria-label');
                console.log(`  - Encontrado: aria-label="${ariaLabel}"`);
                
                if (ariaLabel === ariaLabelBuscado || ariaLabel.includes(`${numeroEstrellas} Star`)) {
                    elemento.click();
                    console.log(`✓ Estrella seleccionada por coincidencia: ${ariaLabel}`);
                    return true;
                }
            }

            // Estrategia de respaldo: si buscamos 5 estrellas, seleccionar la última opción
            if (numeroEstrellas === "5" && elementosEstrella.length > 0) {
                const ultimaEstrella = elementosEstrella[elementosEstrella.length - 1];
                ultimaEstrella.click();
                console.log(`✓ Seleccionada última estrella como respaldo (${ultimaEstrella.getAttribute('aria-label')})`);
                return true;
            }

            console.log(`✗ No se pudo seleccionar ${numeroEstrellas} estrellas`);
            
            // Debug: mostrar todas las opciones disponibles
            console.log("Debug - Elementos de estrellas disponibles:");
            elementosEstrella.forEach((elemento, index) => {
                const ariaLabel = elemento.getAttribute('aria-label');
                const ariaChecked = elemento.getAttribute('aria-checked');
                console.log(`  [${index}] aria-label="${ariaLabel}", aria-checked="${ariaChecked}"`);
            });
            
            return false;
            
        } catch (error) {
            console.error(`Error al seleccionar estrellas:`, error);
            return false;
        }
    }

    // Función principal para llenar la primera página
    function llenarPrimeraPagina() {
        console.log("🏥 Iniciando llenado automático del formulario médico - Primera página...");
        
        // Seleccionar caso clínico
        const casoSeleccionado = seleccionarCasoClinico();
        estadoFormulario.casoSeleccionado = casoSeleccionado;
        console.log(`📋 Caso clínico seleccionado: ${casoSeleccionado.nombre}`);
        
        // Limpiar todas las selecciones primero (hacer clic en botones de limpiar)
        const botonesLimpiar = document.querySelectorAll('button[aria-label="Borrar selección"]');
        botonesLimpiar.forEach(boton => {
            try {
                boton.click();
            } catch (e) {
                // Ignorar errores de botones no visibles
            }
        });

        // Aplicar las selecciones del caso clínico
        let delay = 500; // Retraso inicial
        
        Object.entries(casoSeleccionado.opciones).forEach(([categoria, opcion]) => {
            setTimeout(() => {
                const categoriaInfo = categoriasMedicas[parseInt(categoria)];
                if (categoriaInfo) {
                    seleccionarOpcion(categoriaInfo.id, opcion);
                }
            }, delay);
            delay += 300; // Incrementar retraso para cada selección
        });

        console.log("✅ Primera página completada. Revisa las selecciones antes de continuar.");
        
        // Mostrar resumen
        setTimeout(() => {
            console.log("\n📊 RESUMEN DEL CASO CLÍNICO:");
            console.log(`Tipo: ${casoSeleccionado.nombre}`);
            console.log("Categorías afectadas:", casoSeleccionado.categorias);
            console.log("Opciones seleccionadas:", casoSeleccionado.opciones);
        }, delay + 500);
    }

    // Función para llenar páginas adicionales
    function llenarPaginaAdicional(numeroPagina) {
        const paginaKey = `pagina${numeroPagina}`;
        const paginaConfig = paginasAdicionales[paginaKey];
        
        if (!paginaConfig) {
            console.log(`❌ No se encontró configuración para página ${numeroPagina}`);
            return false;
        }

        console.log(`📄 Llenando página ${numeroPagina}...`);
        
        let delay = 500;
        
        Object.entries(paginaConfig.preguntas).forEach(([preguntaNum, config]) => {
            setTimeout(() => {
                const numeroP = parseInt(preguntaNum);
                console.log(`Procesando pregunta ${numeroP}...`);
                
                if (config.tipo === "dropdown") {
                    let opcionSeleccionada;
                    
                    if (config.seleccion === "aleatoria") {
                        const indiceAleatorio = Math.floor(Math.random() * config.opciones.length);
                        opcionSeleccionada = config.opciones[indiceAleatorio];
                    } else {
                        opcionSeleccionada = config.opciones[0]; // Selección fija
                    }
                    
                    seleccionarDropdownPorLabelledby(config.labelledby, opcionSeleccionada);
                    
                } else if (config.tipo === "radio") {
                    if (config.valorTexto) {
                        // Pregunta 44 - usa texto específico
                        seleccionarRadioPorTexto(config.labelledby, config.valorTexto);
                    } else if (numeroP === 23) {
                        // Pregunta 23 es calificación con estrellas - usar función específica
                        seleccionarEstrellas(config.labelledby, config.valor);
                    } else if (numeroP >= 26 && numeroP <= 43) {
                        // Preguntas 26-43 son divs con aria-label="Número seleccionado: X"
                        seleccionarNumeroPorLabelledby(config.labelledby, config.valor);
                    } else {
                        // Radio buttons normales
                        seleccionarRadioPorLabelledby(config.labelledby, config.valor);
                    }
                }
            }, delay);
            delay += 400;
        });

        console.log(`✅ Página ${numeroPagina} completada`);
        return true;
    }

    // Función para hacer clic en el botón siguiente
    function clickSiguiente() {
        const botonSiguiente = document.querySelector('[data-automation-id="nextButton"]');
        if (botonSiguiente) {
            botonSiguiente.click();
            console.log("➡️ Continuando a la siguiente página...");
            estadoFormulario.paginaActual++;
            return true;
        } else {
            console.log("❌ No se encontró el botón Siguiente");
            return false;
        }
    }

    // Función para hacer clic en el botón enviar (COMENTADA PARA PRUEBAS)
    function clickEnviar() {
        // DESCOMENTA LA LÍNEA DE ABAJO CUANDO ESTÉS LISTO PARA ENVIAR
        // const botonEnviar = document.querySelector('[data-automation-id="submitButton"]');
        // if (botonEnviar) {
        //     botonEnviar.click();
        //     console.log("✅ Formulario enviado exitosamente!");
        //     estadoFormulario.procesoCompleto = true;
        //     return true;
        // } else {
        //     console.log("❌ No se encontró el botón Enviar");
        //     return false;
        // }
        
        console.log("🚫 Envío del formulario DESHABILITADO para pruebas");
        console.log("💡 Para enviar, descomenta las líneas en la función clickEnviar()");
        return false;
    }

    // Función para proceso automático completo
    function procesoAutomaticoCompleto() {
        console.log("🚀 Iniciando proceso automático completo del formulario...");
        console.log("📋 El formulario se completará página por página automáticamente");
        
        // Resetear estado si es necesario
        estadoFormulario.procesoCompleto = false;
        
        // Función recursiva para procesar cada página
        function procesarSiguientePagina() {
            console.log(`🔄 Estado actual: Página ${estadoFormulario.paginaActual}`);
            
            switch(estadoFormulario.paginaActual) {
                case 1:
                    console.log("📝 PROCESANDO PÁGINA 1 (Enfermedades CIE-10)...");
                    llenarPrimeraPagina();
                    
                    // Esperar a que termine de llenar, luego ir a siguiente página
                    setTimeout(() => {
                        console.log("✅ Página 1 completada, avanzando a página 2...");
                        if (clickSiguiente()) {
                            // Esperar a que cargue la siguiente página
                            setTimeout(() => {
                                procesarSiguientePagina();
                            }, 1500);
                        } else {
                            console.log("❌ Error al avanzar desde página 1");
                        }
                    }, 4000); // Más tiempo para la primera página
                    break;
                    
                case 2:
                    console.log("📝 PROCESANDO PÁGINA 2 (Preguntas 21-24: Actividad, Escenario, Estrellas, Curso)...");
                    llenarPaginaAdicional(2);
                    
                    setTimeout(() => {
                        console.log("✅ Página 2 completada, avanzando a página 3...");
                        if (clickSiguiente()) {
                            setTimeout(() => {
                                procesarSiguientePagina();
                            }, 1500);
                        } else {
                            console.log("❌ Error al avanzar desde página 2");
                        }
                    }, 4000); // Más tiempo porque incluye estrellas
                    break;
                    
                case 3:
                    console.log("📝 PROCESANDO PÁGINA 3 (Pregunta 25: Código)...");
                    llenarPaginaAdicional(3);
                    
                    setTimeout(() => {
                        console.log("✅ Página 3 completada, avanzando a página 4...");
                        if (clickSiguiente()) {
                            setTimeout(() => {
                                procesarSiguientePagina();
                            }, 1500);
                        } else {
                            console.log("❌ Error al avanzar desde página 3");
                        }
                    }, 2000); // Menos tiempo, solo una pregunta
                    break;
                    
                case 4:
                    console.log("📝 PROCESANDO PÁGINA 4 (Todas las Evaluaciones 26-44)...");
                    llenarPaginaAdicional(4);
                    
                    setTimeout(() => {
                        console.log("🎉 ¡PROCESO AUTOMÁTICO COMPLETADO!");
                        console.log("==========================================");
                        console.log("✅ Todas las páginas han sido completadas");
                        console.log("👀 REVISAR todas las selecciones antes de enviar");
                        console.log("📤 Para enviar manualmente: automacionMedica.enviar()");
                        console.log("🔄 Para ver estadísticas: automacionMedica.estadisticas()");
                        estadoFormulario.procesoCompleto = true;
                    }, 8000); // Más tiempo porque son muchas preguntas
                    break;
                    
                default:
                    console.log(`❌ Página ${estadoFormulario.paginaActual} no reconocida`);
                    console.log("🔍 Verificando página actual...");
                    verificarPaginaActual();
                    break;
            }
        }
        
        // Verificar página actual antes de iniciar
        verificarPaginaActual();
        
        // Iniciar el proceso después de una pequeña pausa
        setTimeout(() => {
            procesarSiguientePagina();
        }, 500);
    }

    // Función para continuar desde cualquier página
    function continuarDesdePaginaActual() {
        console.log(`🔄 Continuando desde página ${estadoFormulario.paginaActual}...`);
        
        switch(estadoFormulario.paginaActual) {
            case 1:
                llenarPrimeraPagina();
                break;
            case 2:
                llenarPaginaAdicional(2);
                break;
            case 3:
                llenarPaginaAdicional(3);
                break;
            case 4:
                llenarPaginaAdicional(4);
                break;
            default:
                console.log("❌ Página no válida");
                break;
        }
    }

    // Función para generar un caso personalizado (página 1)
    function generarCasoPersonalizado(categorias, opciones) {
        console.log("🎯 Generando caso personalizado...");
        
        let delay = 500;
        Object.entries(opciones).forEach(([categoria, opcion]) => {
            setTimeout(() => {
                const categoriaInfo = categoriasMedicas[parseInt(categoria)];
                if (categoriaInfo) {
                    seleccionarOpcion(categoriaInfo.id, opcion);
                }
            }, delay);
            delay += 300;
        });
    }

    // Función para verificar en qué página estamos
    function verificarPaginaActual() {
        // Intentar identificar la página actual basándose en elementos únicos
        if (document.querySelector('[aria-describedby*="rc83969ce60c842f5adeb84b5bffc55fd"]')) {
            estadoFormulario.paginaActual = 1;
            console.log("📍 Página actual detectada: 1 (Enfermedades CIE-10)");
        } else if (document.querySelector('[aria-labelledby*="rd2b7c10c5013449cb6dbeed9392df93d"]')) {
            estadoFormulario.paginaActual = 2;
            console.log("📍 Página actual detectada: 2 (Actividad y Escenario)");
        } else if (document.querySelector('[aria-labelledby*="r72f2638b01fa44b39db1bdcbb29a0755"]')) {
            estadoFormulario.paginaActual = 3;
            console.log("📍 Página actual detectada: 3 (Código)");
        } else if (document.querySelector('[aria-labelledby*="rcbdd1ceb03604dc3b96667d9bfb9c252"]')) {
            estadoFormulario.paginaActual = 4;
            console.log("📍 Página actual detectada: 4 (Evaluaciones)");
        } else {
            console.log("❓ No se pudo detectar la página actual");
        }
        
        return estadoFormulario.paginaActual;
    }

    // Función para mostrar estadísticas y configuración
    function mostrarEstadisticas() {
        console.log("\n📊 ESTADÍSTICAS DEL FORMULARIO MÉDICO:");
        console.log("==========================================");
        console.log(`Página actual: ${estadoFormulario.paginaActual}`);
        console.log(`Proceso completo: ${estadoFormulario.procesoCompleto ? 'Sí' : 'No'}`);
        
        if (estadoFormulario.casoSeleccionado) {
            console.log(`Caso clínico: ${estadoFormulario.casoSeleccionado.nombre}`);
            console.log(`Probabilidad: ${estadoFormulario.casoSeleccionado.probabilidad}%`);
        }
        
        console.log("\n📋 CASOS CLÍNICOS DISPONIBLES:");
        casosClinicosComunes.forEach((caso, index) => {
            console.log(`${index + 1}. ${caso.nombre} (${caso.probabilidad}%)`);
        });
        
        console.log("\n🏥 PÁGINAS DEL FORMULARIO:");
        console.log("1. Enfermedades CIE-10 (preguntas 1-20)");
        console.log("2. Actividad, Escenario, Estrellas, Curso (preguntas 21-24)");
        console.log("3. Código del Estudiante (pregunta 25)");
        console.log("4. Todas las Evaluaciones Personales (preguntas 26-44)");
    }

    // Exportar funciones globalmente para uso en consola
    window.automacionMedica = {
        // Funciones principales
        llenar: llenarPrimeraPagina,
        llenarPagina: llenarPaginaAdicional,
        continuar: clickSiguiente,
        enviar: clickEnviar,
        
        // Procesos automáticos
        completar: procesoAutomaticoCompleto,
        continuarDesde: continuarDesdePaginaActual,
        
        // Utilidades
        personalizado: generarCasoPersonalizado,
        verificarPagina: verificarPaginaActual,
        estadisticas: mostrarEstadisticas,
        
        // Datos de referencia
        casos: casosClinicosComunes,
        categorias: categoriasMedicas,
        paginas: paginasAdicionales,
        estado: estadoFormulario
    };

    // Inicialización automática
    console.log("🚀 Script de Automatización Médica cargado exitosamente!");
    console.log("==========================================");
    
    // Verificar página actual al cargar
    verificarPaginaActual();
    
    console.log("\n📖 COMANDOS DISPONIBLES:");
    console.log("========================");
    console.log("🎯 COMANDO PRINCIPAL:");
    console.log("   automacionMedica.completar() - ¡COMPLETA TODO EL FORMULARIO AUTOMÁTICAMENTE!");
    
    console.log("\n🔧 COMANDOS INDIVIDUALES:");
    console.log("   automacionMedica.llenar() - Llenar primera página");
    console.log("   automacionMedica.llenarPagina(2-4) - Llenar página específica");
    console.log("   automacionMedica.continuar() - Ir a siguiente página");
    console.log("   automacionMedica.enviar() - Enviar formulario (deshabilitado)");
    
    console.log("\n🔧 UTILIDADES:");
    console.log("   automacionMedica.verificarPagina() - Detectar página actual");
    console.log("   automacionMedica.estadisticas() - Ver estadísticas completas");
    console.log("   automacionMedica.continuarDesde() - Continuar desde página actual");
    
    console.log("\n🎲 PARA EMPEZAR:");
    console.log("   📋 Ejecuta: automacionMedica.completar()");
    console.log("   ⏱️  El proceso tomará aproximadamente 30-45 segundos");
    console.log("   👀 Al final podrás revisar todas las selecciones");
    
    console.log("\n⚠️  IMPORTANTE:");
    console.log("   - NO se enviará automáticamente (seguro para pruebas)");
    console.log("   - Podrás revisar cada página al final");
    console.log("   - El envío solo se hace manualmente cuando tú quieras");

    // NO ejecutar automáticamente la primera página
    // Solo mostrar las instrucciones

})();

// ============================================
// INSTRUCCIONES DE USO COMPLETO:
// ============================================
// 
// 🚀 USO AUTOMÁTICO (RECOMENDADO):
// 1. Abre la consola del navegador (F12)
// 2. Pega este código completo
// 3. Presiona Enter
// 4. Ejecuta: automacionMedica.completar()
// 5. El script completará todas las páginas automáticamente
//
// 🔧 USO MANUAL POR PÁGINAS:
// 1. Primera página: automacionMedica.llenar()
// 2. Siguiente página: automacionMedica.continuar()
// 3. Llenar página específica: automacionMedica.llenarPagina(2)
// 4. Repetir hasta completar todas las páginas
//
// 📊 MONITOREO:
// - Ver progreso: automacionMedica.estadisticas()
// - Ver página actual: automacionMedica.verificarPagina()
// - Continuar desde donde se quedó: automacionMedica.continuarDesde()
//
// ⚠️  ENVÍO:
// - El envío está deshabilitado para pruebas
// - Para habilitarlo, descomenta las líneas en clickEnviar()
// - Luego usa: automacionMedica.enviar()
//
// ============================================q    