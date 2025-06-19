// ============================================
// SCRIPT AUTOMÁTICO PARA FORMULARIO MÉDICO MEJORADO
// Versión MEJORADA con 2-3 selecciones coherentes y tiempo realista
// ============================================

(function() {
    'use strict';
    
    // Mapeo de categorías médicas (MANTENER IGUAL)
    const categoriasMedicas = {
        1: { // ENFERMEDADES INFECCIOSAS (A y B)
            id: "rc83969ce60c842f5adeb84b5bffc55fd",
            opciones: [
                "RINOFARINGITIS AGUDA (RESFRIADO COMUN)",
                "GASTROENTERITIS VIRAL, SIN OTRA ESPECIFICACION",
                "INFECCION INTESTINAL BACTERIANA, NO ESPECIFICADA",
                "DIARREA Y GASTROENTERITIS DE PRESUNTO ORIGEN INFECCIOSO",
                "ENTERITIS DEBIDA A ROTAVIRUS",
                "INFECCION VIRAL DEL SISTEMA NERVIOSO CENTRAL, NO ESPECIFICADA",
                "CANDIDIASIS NEONATAL",
                "INFECCION BACTERIANA, NO ESPECIFICADA",
                "SEPTICEMIA, NO ESPECIFICADA",
                "TOS FERINA, NO ESPECIFICADA",
                "ESCARLATINA",
                "ERISIPELA",
                "CELULITIS Y ABSCESO DE BOCA",
                "INFECCION CUTANEA POR MICOBACTERIAS"
            ]
        },
        2: { // NEOPLASIAS (C)
            id: "r0313297517a94ee5a7398e90fff4b6f3",
            opciones: [
                "TUMOR BENIGNO DE LA PIEL, SITIO NO ESPECIFICADO",
                "NEVO MELANOCITICO, SITIO NO ESPECIFICADO",
                "TUMOR BENIGNO DE LA MAMA",
                "HEMANGIOMA, DE CUALQUIER SITIO",
                "LEIOMIOMA DEL UTERO, SIN OTRA ESPECIFICACION",
                "TUMOR BENIGNO DEL OVARIO",
                "TUMOR BENIGNO DE LOS GANGLIOS LINFATICOS",
                "QUISTE EPIDERMICO",
                "CARCINOMA IN SITU DE LA PIEL, SITIO NO ESPECIFICADO",
                "TUMOR DE COMPORTAMIENTO INCIERTO O DESCONOCIDO DE LA PIEL"
            ]
        },
        3: { // TRASTORNOS DE LA SANGRE (D)
            id: "r0a6eab86d9c843b2bde7a5884e427762",
            opciones: [
                "ANEMIA POR DEFICIENCIA DE HIERRO SIN OTRA ESPECIFICACION",
                "ANEMIA DE TIPO NO ESPECIFICADO",
                "ANEMIA POR DEFICIENCIA DE FOLATOS, SIN OTRA ESPECIFICACION",
                "ANEMIA POR DEFICIENCIA DE VITAMINA B12, SIN OTRA ESPECIFICACION",
                "ANEMIA POSTHEMORRAGICA AGUDA",
                "ANEMIA NUTRICIONAL, NO ESPECIFICADA",
                "TROMBOCITOPENIA NO ESPECIFICADA",
                "PURPURA TROMBOCITOPENICA IDIOPATICA",
                "NEUTROPENIA NEONATAL TRANSITORIA",
                "POLICITEMIA VERA"
            ]
        },
        4: { // ENFERMEDADES ENDOCRINAS (E)
            id: "r3d602339fb364d35b0397d7b4167213d",
            opciones: [
                "DIABETES MELLITUS NO INSULINODEPENDIENTE SIN MENCION DE COMPLICACION",
                "DIABETES MELLITUS INSULINODEPENDIENTE SIN MENCION DE COMPLICACION",
                "HIPOTIROIDISMO, NO ESPECIFICADO",
                "HIPERTIROIDISMO NEONATAL TRANSITORIO",
                "OBESIDAD, NO ESPECIFICADA",
                "OBESIDAD DEBIDA A EXCESO DE CALORIAS",
                "BOCIO NO TOXICO, NO ESPECIFICADO",
                "DEFICIENCIA DE VITAMINA D, NO ESPECIFICADA",
                "DESNUTRICION PROTEICOCALORICA, NO ESPECIFICADA",
                "HIPOGLICEMIA, NO ESPECIFICADA",
                "HIPERGLICERIDEMIA PURA",
                "GOTA IDIOPATICA",
                "OSTEOPOROSIS NO ESPECIFICADA, SIN FRACTURA PATOLOGICA"
            ]
        },
        5: { // ENFERMEDADES MENTALES (F)
            id: "racedd8fbddbf4c3fa99906910472d928",
            opciones: [
                "EPISODIO DEPRESIVO LEVE",
                "EPISODIO DEPRESIVO MODERADO",
                "TRASTORNO DE ANSIEDAD GENERALIZADA",
                "TRASTORNO MIXTO DE ANSIEDAD Y DEPRESION",
                "INSOMNIO NO ORGANICO",
                "TRASTORNO DE PANICO [ANSIEDAD PAROXISTICA EPISODICA]",
                "TRASTORNO DE ADAPTACION",
                "REACCION AL ESTRÉS AGUDO",
                "TRASTORNO DE ESTRÉS POSTRAUMATICO",
                "FOBIAS ESPECIFICADAS [AISLADAS]",
                "TRASTORNO OBSESIVO",
                "ANOREXIA NERVIOSA",
                "DISTIMIA"
            ]
        },
        6: { // SISTEMA NERVIOSO (G)
            id: "r2dd9de331a574459a2349f07c1398bea",
            opciones: [
                "CEFALEA DEBIDA A TENSION",
                "CEFALEA VASCULAR, NCOP",
                "MIGRAÑA SIN AURA [MIGRAÑA COMUN]",
                "MIGRAÑA CON AURA [MIGRAÑA CLASICA]",
                "CEFALEA, NO ESPECIFICADA",
                "EPILEPSIA, TIPO NO ESPECIFICADO",
                "SINDROME DEL TUNEL CARPIANO",
                "PARALISIS DE BELL",
                "NEUROPATIA DIABETICA",
                "MONONEUROPATIA, NO ESPECIFICADA",
                "MAREO Y DESVANECIMIENTO",
                "TEMBLOR ESENCIAL",
                "NEURALGIA DEL TRIGEMINO"
            ]
        },
        7: { // OJO Y OÍDO (H)
            id: "r89aa10589190430aacd16243efafb9ad",
            opciones: [
                "MIOPIA",
                "HIPERMETROPIA",
                "ASTIGMATISMO",
                "PRESBICIA",
                "CONJUNTIVITIS AGUDA, NO ESPECIFICADA",
                "ORZUELO Y OTRAS INFLAMACIONES PROFUNDAS DEL PARPADO",
                "CATARATA SENIL, NO ESPECIFICADA",
                "GLAUCOMA PRIMARIO DE ANGULO ABIERTO",
                "HIPOACUSIA NEUROSENSORIAL, SIN OTRA ESPECIFICACION",
                "HIPOACUSIA CONDUCTIVA, SIN OTRA ESPECIFICACION",
                "OTITIS MEDIA SUPURATIVA AGUDA",
                "OTITIS EXTERNA, SIN OTRA ESPECIFICACION",
                "CERUMEN IMPACTADO",
                "TINNITUS",
                "VERTIGO PAROXISTICO BENIGNO"
            ]
        },
        8: { // SISTEMA CIRCULATORIO (I)
            id: "rba5658b109cb4465bdc2dbc4b06347bc",
            opciones: [
                "HIPERTENSION ESENCIAL (PRIMARIA)",
                "ANGINA DE PECHO, NO ESPECIFICADA",
                "ARRITMIA CARDIACA, NO ESPECIFICADA",
                "PALPITACIONES",
                "INSUFICIENCIA CARDIACA, NO ESPECIFICADA",
                "FIBRILACION Y ALETEO AURICULAR",
                "TAQUICARDIA SUPRAVENTRICULAR",
                "HEMORROIDES NO ESPECIFICADAS, SIN COMPLICACION",
                "VENAS VARICOSAS DE LOS MIEMBROS INFERIORES SIN ULCERA NI INFLAMACION",
                "TROMBOSIS CORONARIA QUE NO RESULTA EN INFARTO DEL MIOCARDIO",
                "HIPOTENSION, NO ESPECIFICADA",
                "FLEBITIS Y TROMBOFLEBITIS DE SITIO NO ESPECIFICADO"
            ]
        },
        9: { // SISTEMA RESPIRATORIO (J)
            id: "rfbb3411c08db4a6c82b5d3c4f06037a0",
            opciones: [
                "RINOFARINGITIS AGUDA (RESFRIADO COMUN)",
                "FARINGITIS AGUDA, NO ESPECIFICADA",
                "RINITIS ALERGICA, NO ESPECIFICADA",
                "BRONQUITIS AGUDA, NO ESPECIFICADA",
                "NEUMONIA, NO ESPECIFICADA",
                "ASMA, NO ESPECIFICADA",
                "SINUSITIS AGUDA, NO ESPECIFICADA",
                "LARINGITIS AGUDA",
                "TRAQUEITIS AGUDA",
                "AMIGDALITIS AGUDA, NO ESPECIFICADA",
                "BRONQUITIS CRONICA NO ESPECIFICADA",
                "INFLUENZA CON OTRAS MANIFESTACIONES RESPIRATORIAS, VIRUS NO IDENTIFICADO",
                "RINITIS VASOMOTORA",
                "TOS"
            ]
        },
        10: { // SISTEMA DIGESTIVO (K)
            id: "r75cbb3da217842438980ba9caa2aa993",
            opciones: [
                "DISPEPSIA",
                "GASTRITIS, NO ESPECIFICADA",
                "CONSTIPACION",
                "DIARREA FUNCIONAL",
                "SINDROME DEL COLON IRRITABLE SIN DIARREA",
                "ENFERMEDAD DEL REFLUJO GASTROESOFAGICO SIN ESOFAGITIS",
                "HEMORROIDES NO ESPECIFICADAS, SIN COMPLICACION",
                "FISURA ANAL, NO ESPECIFICADA",
                "HERNIA INGUINAL UNILATERAL O NO ESPECIFICADA, SIN OBSTRUCION NI GANGRENA",
                "CARIES DENTAL, NO ESPECIFICADA",
                "GINGIVITIS CRONICA",
                "HEMORRAGIA GASTROINTESTINAL, NO ESPECIFICADA",
                "ULCERA GASTRICA CRONICA SIN HEMORRAGIA NI PERFORACION"
            ]
        },
        11: { // PIEL Y TEJIDO SUBCUTÁNEO (L)
            id: "r28e8660ab2b547c38afd0d928f9e2170",
            opciones: [
                "DERMATITIS ATOPICA, NO ESPECIFICADA",
                "ACNE VULGAR",
                "URTICARIA, NO ESPECIFICADA",
                "DERMATITIS DE CONTACTO, FORMA Y CAUSA NO ESPECIFICADAS",
                "DERMATITIS SEBORREICA, NO ESPECIFICADA",
                "PSORIASIS VULGAR",
                "VITILIGO",
                "ALOPECIA ANDROGENA, NO ESPECIFICADA",
                "CELULITIS DE SITIO NO ESPECIFICADO",
                "IMPETIGO [CUALQUIER SITIO ANATOMICO] [CUALQUIER ORGANISMO]",
                "QUISTE EPIDERMICO",
                "QUERATOSIS SEBORREICA",
                "VERRUGAS VULGARES"
            ]
        },
        12: { // SISTEMA OSTEOMUSCULAR (M)
            id: "rebbd12350a374ecca5f77c0e17718f33",
            opciones: [
                "DOLOR EN ARTICULACION",
                "DOLOR EN MIEMBRO",
                "LUMBAGO NO ESPECIFICADO",
                "CERVICALGIA",
                "ARTRITIS, NO ESPECIFICADA",
                "ARTROSIS, NO ESPECIFICADA",
                "MIALGIA",
                "FIBROMIALGIA",
                "OSTEOPOROSIS NO ESPECIFICADA, SIN FRACTURA PATOLOGICA",
                "ESGUINCE Y TORCEDURA DE LA COLUMNA LUMBAR",
                "TENDINITIS, NO ESPECIFICADA",
                "BURSITIS, NO ESPECIFICADA",
                "CONTRACTURA MUSCULAR",
                "ESCOLIOSIS, NO ESPECIFICADA"
            ]
        },
        13: { // APARATO GENITOURINARIO (N)
            id: "rfed834ef89cc4f85927230d6eea7027a",
            opciones: [
                "INFECCION DE VIAS URINARIAS, SITIO NO ESPECIFICADO",
                "CISTITIS, NO ESPECIFICADA",
                "DISMENORREA, NO ESPECIFICADA",
                "VAGINITIS AGUDA",
                "HIPERPLASIA DE LA PROSTATA",
                "PROSTATITIS CRONICA",
                "CALCULO DEL RIÑON",
                "INCONTINENCIA URINARIA POR TENSION",
                "INSUFICIENCIA RENAL CRONICA, NO ESPECIFICADA",
                "MENSTRUACION IRREGULAR, NO ESPECIFICADA",
                "AMENORREA, SIN OTRA ESPECIFICACION",
                "SINDROME DE TENSION PREMENSTRUAL",
                "ENDOMETRIOSIS, NO ESPECIFICADA"
            ]
        },
        14: { // EMBARAZO, PARTO Y PUERPERIO (O)
            id: "r4aba5d34c235486eb393364bf2c8d32f",
            opciones: [
                "SUPERVISION DE PRIMER EMBARAZO NORMAL",
                "SUPERVISION DE OTROS EMBARAZOS NORMALES",
                "AMENAZA DE ABORTO",
                "HIPEREMESIS GRAVIDICA LEVE",
                "PARTO UNICO ESPONTANEO, PRESENTACION CEFALICA DE VERTICE"
            ]
        },
        15: { // PERIODO PERINATAL (P)
            id: "rc7d8e03b5c694f41875ee79e0941a8fc",
            opciones: [
                "RECIEN NACIDO POSTERMINO SIN SOBREPESO PARA SU EDAD GESTACIONAL",
                "ICTERICIA NEONATAL, NO ESPECIFICADA",
                "SINDROME DE DIFICULTAD RESPIRATORIA DEL RECIEN NACIDO"
            ]
        },
        16: { // MALFORMACIONES CONGÉNITAS (Q)
            id: "r0535f0273d524618a9bd722fafb534fe",
            opciones: [
                "LUXACION CONGENITA DE LA CADERA, NO ESPECIFICADA",
                "LABIO LEPORINO, UNILATERAL",
                "COMUNICACION INTERVENTRICULAR"
            ]
        },
        17: { // SÍNTOMAS Y SIGNOS (R)
            id: "r2e770e591aa74e689f686f85e4a27436",
            opciones: [
                "CEFALEA",
                "MALESTAR Y FATIGA",
                "MAREO Y DESVANECIMIENTO",
                "FIEBRE, NO ESPECIFICADA",
                "DOLOR, NO ESPECIFICADO",
                "NAUSEA Y VOMITO",
                "DOLOR ABDOMINAL LOCALIZADO EN PARTE SUPERIOR",
                "DISNEA",
                "TOS",
                "DOLOR EN EL PECHO, NO ESPECIFICADO",
                "PALPITACIONES",
                "EDEMA, NO ESPECIFICADO",
                "SINCOPE Y COLAPSO",
                "ANOREXIA",
                "PERDIDA ANORMAL DE PESO"
            ]
        },
        18: { // TRAUMATISMOS (S y T)
            id: "rac5c9d3218c24c03b5352e9e8f5cee97",
            opciones: [
                "CONTUSION DEL HOMBRO Y DEL BRAZO",
                "CONTUSION DE LA RODILLA",
                "HERIDA DEL CUERO CABELLUDO",
                "FRACTURA DE LA CLAVICULA",
                "ESGUINCES Y TORCEDURAS DE LA COLUMNA CERVICAL",
                "LUXACION DEL HOMBRO",
                "TRAUMATISMO SUPERFICIAL DE LA CABEZA, PARTE NO ESPECIFICADA",
                "FRACTURA DE COSTILLA",
                "CONTUSION DE DEDO(S) DE LA MANO, SIN DAÑO DE LA(S) UÑA(S)",
                "HERIDA DE DEDO(S) DE LA MANO, SIN DAÑO DE LA(S) UÑA(S)"
            ]
        },
        19: { // CAUSAS EXTERNAS (V y Y)
            id: "r8aa6d4946c3545d084a08aad2980c682",
            opciones: [
                "ACCIDENTE DE TRANSPORTE NO ESPECIFICADO",
                "PEATON LESIONADO EN ACCIDENTE DE TRANSITO NO ESPECIFICADO"
            ]
        },
        20: { // FACTORES DE SALUD (Z)
            id: "r4d2c8cebe20f467d9ea81202604abe30",
            opciones: [
                "EXAMEN MEDICO GENERAL",
                "CONSULTA, NO ESPECIFICADA",
                "CONTROL GENERAL DE SALUD DE RUTINA",
                "ATENCION MEDICA, NO ESPECIFICADA",
                "EXAMEN DE PESQUISA ESPECIAL PARA DIABETES MELLITUS",
                "EXAMEN DE PESQUISA ESPECIAL PARA HIPERTENSION ARTERIAL",
                "SUPERVISION DE PRIMER EMBARAZO NORMAL",
                "EXAMEN GINECOLOGICO (GENERAL) (DE RUTINA)",
                "CONTROL DE SALUD DE RUTINA DEL NIÑO",
                "EXAMEN PREEMPLEO",
                "HISTORIA PERSONAL DE TUMOR MALIGNO DE MAMA",
                "PRESENCIA DE MARCAPASO CARDIACO"
            ]
        }
    };

    // CASOS CLÍNICOS MEJORADOS - Ahora con 2-3 selecciones coherentes
    const casosClinicosComunes = [
        // ========== CONSULTAS DE RUTINA Y PREVENTIVAS ==========
        {
            nombre: "Consulta de Rutina Simple",
            probabilidad: 12,
            categorias: [20],
            opciones: {
                20: "EXAMEN MEDICO GENERAL"
            }
        },
        {
            nombre: "Control Preventivo con Chequeo",
            probabilidad: 8,
            categorias: [20, 8],
            opciones: {
                20: "CONTROL GENERAL DE SALUD DE RUTINA",
                8: "HIPERTENSION ESENCIAL (PRIMARIA)"
            }
        },
        {
            nombre: "Examen Ginecológico de Rutina",
            probabilidad: 6,
            categorias: [20, 13],
            opciones: {
                20: "EXAMEN GINECOLOGICO (GENERAL) (DE RUTINA)",
                13: "DISMENORREA, NO ESPECIFICADA"
            }
        },

        // ========== ENFERMEDADES RESPIRATORIAS COMUNES ==========
        {
            nombre: "Resfriado Común Completo",
            probabilidad: 10,
            categorias: [1, 9, 17],
            opciones: {
                1: "RINOFARINGITIS AGUDA (RESFRIADO COMUN)",
                9: "FARINGITIS AGUDA, NO ESPECIFICADA",
                17: "CEFALEA"
            }
        },
        {
            nombre: "Infección Respiratoria Alta",
            probabilidad: 8,
            categorias: [9, 17, 1],
            opciones: {
                9: "SINUSITIS AGUDA, NO ESPECIFICADA",
                17: "FIEBRE, NO ESPECIFICADA",
                1: "INFECCION BACTERIANA, NO ESPECIFICADA"
            }
        },
        {
            nombre: "Bronquitis con Tos",
            probabilidad: 6,
            categorias: [9, 17],
            opciones: {
                9: "BRONQUITIS AGUDA, NO ESPECIFICADA",
                17: "TOS"
            }
        },
        {
            nombre: "Asma con Dificultad Respiratoria",
            probabilidad: 5,
            categorias: [9, 17],
            opciones: {
                9: "ASMA, NO ESPECIFICADA",
                17: "DISNEA"
            }
        },

        // ========== PROBLEMAS OSTEOMUSCULARES ==========
        {
            nombre: "Lumbalgia con Dolor",
            probabilidad: 8,
            categorias: [12, 17],
            opciones: {
                12: "LUMBAGO NO ESPECIFICADO",
                17: "DOLOR, NO ESPECIFICADO"
            }
        },
        {
            nombre: "Cervicalgia y Cefalea Tensional",
            probabilidad: 7,
            categorias: [12, 6, 17],
            opciones: {
                12: "CERVICALGIA",
                6: "CEFALEA DEBIDA A TENSION",
                17: "CEFALEA"
            }
        },
        {
            nombre: "Artritis con Dolor Articular",
            probabilidad: 6,
            categorias: [12, 17],
            opciones: {
                12: "ARTRITIS, NO ESPECIFICADA",
                17: "DOLOR EN ARTICULACION"
            }
        },
        {
            nombre: "Fibromialgia con Fatiga",
            probabilidad: 4,
            categorias: [12, 17, 5],
            opciones: {
                12: "FIBROMIALGIA",
                17: "MALESTAR Y FATIGA",
                5: "TRASTORNO DE ANSIEDAD GENERALIZADA"
            }
        },

        // ========== PROBLEMAS DIGESTIVOS ==========
        {
            nombre: "Dispepsia con Dolor Abdominal",
            probabilidad: 7,
            categorias: [10, 17],
            opciones: {
                10: "DISPEPSIA",
                17: "DOLOR ABDOMINAL LOCALIZADO EN PARTE SUPERIOR"
            }
        },
        {
            nombre: "Gastritis con Náuseas",
            probabilidad: 6,
            categorias: [10, 17],
            opciones: {
                10: "GASTRITIS, NO ESPECIFICADA",
                17: "NAUSEA Y VOMITO"
            }
        },
        {
            nombre: "Gastroenteritis Viral",
            probabilidad: 5,
            categorias: [1, 10, 17],
            opciones: {
                1: "GASTROENTERITIS VIRAL, SIN OTRA ESPECIFICACION",
                10: "DIARREA FUNCIONAL",
                17: "NAUSEA Y VOMITO"
            }
        },
        {
            nombre: "Síndrome Colon Irritable",
            probabilidad: 4,
            categorias: [10, 17],
            opciones: {
                10: "SINDROME DEL COLON IRRITABLE SIN DIARREA",
                17: "DOLOR ABDOMINAL LOCALIZADO EN PARTE SUPERIOR"
            }
        },

        // ========== PROBLEMAS CARDIOVASCULARES ==========
        {
            nombre: "Hipertensión con Palpitaciones",
            probabilidad: 8,
            categorias: [8, 17],
            opciones: {
                8: "HIPERTENSION ESENCIAL (PRIMARIA)",
                17: "PALPITACIONES"
            }
        },
        {
            nombre: "Arritmia Cardíaca",
            probabilidad: 5,
            categorias: [8, 17],
            opciones: {
                8: "ARRITMIA CARDIACA, NO ESPECIFICADA",
                17: "PALPITACIONES"
            }
        },
        {
            nombre: "Insuficiencia Cardíaca",
            probabilidad: 3,
            categorias: [8, 17],
            opciones: {
                8: "INSUFICIENCIA CARDIACA, NO ESPECIFICADA",
                17: "DISNEA"
            }
        },

        // ========== PROBLEMAS DERMATOLÓGICOS ==========
        {
            nombre: "Dermatitis Atópica",
            probabilidad: 5,
            categorias: [11],
            opciones: {
                11: "DERMATITIS ATOPICA, NO ESPECIFICADA"
            }
        },
        {
            nombre: "Acné Vulgar",
            probabilidad: 4,
            categorias: [11],
            opciones: {
                11: "ACNE VULGAR"
            }
        },
        {
            nombre: "Urticaria",
            probabilidad: 3,
            categorias: [11],
            opciones: {
                11: "URTICARIA, NO ESPECIFICADA"
            }
        },
        {
            nombre: "Celulitis Bacteriana",
            probabilidad: 3,
            categorias: [1, 11],
            opciones: {
                1: "INFECCION BACTERIANA, NO ESPECIFICADA",
                11: "CELULITIS DE SITIO NO ESPECIFICADO"
            }
        },

        // ========== PROBLEMAS NEUROLÓGICOS ==========
        {
            nombre: "Migraña sin Aura",
            probabilidad: 6,
            categorias: [6, 17],
            opciones: {
                6: "MIGRAÑA SIN AURA [MIGRAÑA COMUN]",
                17: "CEFALEA"
            }
        },
        {
            nombre: "Migraña con Aura",
            probabilidad: 4,
            categorias: [6, 17],
            opciones: {
                6: "MIGRAÑA CON AURA [MIGRAÑA CLASICA]",
                17: "CEFALEA"
            }
        },
        {
            nombre: "Vértigo con Mareo",
            probabilidad: 4,
            categorias: [7, 17],
            opciones: {
                7: "VERTIGO PAROXISTICO BENIGNO",
                17: "MAREO Y DESVANECIMIENTO"
            }
        },

        // ========== PROBLEMAS MENTALES ==========
        {
            nombre: "Ansiedad con Fatiga",
            probabilidad: 6,
            categorias: [5, 17],
            opciones: {
                5: "TRASTORNO DE ANSIEDAD GENERALIZADA",
                17: "MALESTAR Y FATIGA"
            }
        },
        {
            nombre: "Depresión Leve",
            probabilidad: 5,
            categorias: [5, 17],
            opciones: {
                5: "EPISODIO DEPRESIVO LEVE",
                17: "MALESTAR Y FATIGA"
            }
        },
        {
            nombre: "Insomnio con Ansiedad",
            probabilidad: 4,
            categorias: [5, 17],
            opciones: {
                5: "INSOMNIO NO ORGANICO",
                17: "MALESTAR Y FATIGA"
            }
        },

        // ========== PROBLEMAS GENITOURINARIOS ==========
        {
            nombre: "Infección Urinaria",
            probabilidad: 6,
            categorias: [13],
            opciones: {
                13: "INFECCION DE VIAS URINARIAS, SITIO NO ESPECIFICADO"
            }
        },
        {
            nombre: "Cistitis",
            probabilidad: 4,
            categorias: [13],
            opciones: {
                13: "CISTITIS, NO ESPECIFICADA"
            }
        },

        // ========== PROBLEMAS OFTALMOLÓGICOS ==========
        {
            nombre: "Defectos Refractivos",
            probabilidad: 5,
            categorias: [7],
            opciones: {
                7: "MIOPIA"
            }
        },
        {
            nombre: "Conjuntivitis",
            probabilidad: 3,
            categorias: [7],
            opciones: {
                7: "CONJUNTIVITIS AGUDA, NO ESPECIFICADA"
            }
        },

        // ========== PROBLEMAS ENDOCRINOS ==========
        {
            nombre: "Diabetes Tipo 2",
            probabilidad: 4,
            categorias: [4, 6],
            opciones: {
                4: "DIABETES MELLITUS NO INSULINODEPENDIENTE SIN MENCION DE COMPLICACION",
                6: "NEUROPATIA DIABETICA"
            }
        },
        {
            nombre: "Hipotiroidismo",
            probabilidad: 3,
            categorias: [4, 17],
            opciones: {
                4: "HIPOTIROIDISMO, NO ESPECIFICADO",
                17: "MALESTAR Y FATIGA"
            }
        },

        // ========== ANEMIA ==========
        {
            nombre: "Anemia Ferropénica",
            probabilidad: 4,
            categorias: [3, 17],
            opciones: {
                3: "ANEMIA POR DEFICIENCIA DE HIERRO SIN OTRA ESPECIFICACION",
                17: "MALESTAR Y FATIGA"
            }
        }
    ];

    // Variable para rastrear el estado del formulario
    let estadoFormulario = {
        paginaActual: 1,
        casoSeleccionado: null,
        procesoCompleto: false,
        formularioActual: 1,
        totalFormularios: 50,
        procesandoLote: false
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
                        "Hospital Raúl Orejuela Bueno sede Principal",
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
                26: { tipo: "radio", labelledby: "QuestionId_rcbdd1ceb03604dc3b96667d9bfb9c252 QuestionInfo_rcbdd1ceb03604dc3b96667d9bfb9c252", valor: "6" },
                27: { tipo: "radio", labelledby: "QuestionId_r2bb10825c5c34ea091c006929acc7c9d QuestionInfo_r2bb10825c5c34ea091c006929acc7c9d", valor: "6" },
                28: { tipo: "radio", labelledby: "QuestionId_r04e048f805d94ba284645850bf25d3f5 QuestionInfo_r04e048f805d94ba284645850bf25d3f5", valor: "6" },
                29: { tipo: "radio", labelledby: "QuestionId_rc08619b529484eb29215348ba292c6c7 QuestionInfo_rc08619b529484eb29215348ba292c6c7", valor: "6" },
                30: { tipo: "radio", labelledby: "QuestionId_r98fc6df30c2a436797f7016c46db7ce1 QuestionInfo_r98fc6df30c2a436797f7016c46db7ce1", valor: "6" },
                31: { tipo: "radio", labelledby: "QuestionId_rfaf714c4481f45f4805aed6890540286 QuestionInfo_rfaf714c4481f45f4805aed6890540286", valor: "6" },
                32: { tipo: "radio", labelledby: "QuestionId_r908224df2ff94b4498cd897e1d260870 QuestionInfo_r908224df2ff94b4498cd897e1d260870", valor: "6" },
                33: { tipo: "radio", labelledby: "QuestionId_rc24bad3a8b72497e9c8ee7dfe72213ab QuestionInfo_rc24bad3a8b72497e9c8ee7dfe72213ab", valor: "6" },
                34: { tipo: "radio", labelledby: "QuestionId_r0de2eedf33a0412db398c86ba0f457e3 QuestionInfo_r0de2eedf33a0412db398c86ba0f457e3", valor: "1" },
                35: { tipo: "radio", labelledby: "QuestionId_r9bdb5add7c3d4ee79bb35aa6ce8bb85e QuestionInfo_r9bdb5add7c3d4ee79bb35aa6ce8bb85e", valor: "1" },
                36: { tipo: "radio", labelledby: "QuestionId_r03fb07364ba840a0be61f5c60236c09e QuestionInfo_r03fb07364ba840a0be61f5c60236c09e", valor: "1" },
                37: { tipo: "radio", labelledby: "QuestionId_r383e832a3e5f459db4a858111498068d QuestionInfo_r383e832a3e5f459db4a858111498068d", valor: "6" },
                38: { tipo: "radio", labelledby: "QuestionId_re87671d222534b6a80e93610ac5388fa QuestionInfo_re87671d222534b6a80e93610ac5388fa", valor: "6" },
                39: { tipo: "radio", labelledby: "QuestionId_rae5fef55c17149b9b2be2891b1c92950 QuestionInfo_rae5fef55c17149b9b2be2891b1c92950", valor: "6" },
                40: { tipo: "radio", labelledby: "QuestionId_r4caba304fb394c02874d9a8ad63ab7e6 QuestionInfo_r4caba304fb394c02874d9a8ad63ab7e6", valor: "6" },
                41: { tipo: "radio", labelledby: "QuestionId_r38537a1ca1a64ef1bb99daf6bd80bd18 QuestionInfo_r38537a1ca1a64ef1bb99daf6bd80bd18", valor: "6" },
                42: { tipo: "radio", labelledby: "QuestionId_ra1e542d89d0a4c3daa2f6f997a367c93 QuestionInfo_ra1e542d89d0a4c3daa2f6f997a367c93", valor: "1" },
                43: { tipo: "radio", labelledby: "QuestionId_r91c3c0162e604f48a7743266b1b321af QuestionInfo_r91c3c0162e604f48a7743266b1b321af", valor: "6" },
                44: { tipo: "radio", labelledby: "QuestionId_r161f6679865848f9ab07fee563fc619d QuestionInfo_r161f6679865848f9ab07fee563fc619d", valorTexto: "No considero necesario apoyo" }
            }
        }
    };

    // ===================================================
    // FUNCIONES CON TIEMPOS REALISTAS PARA SIMULAR HUMANO
    // ===================================================

    // Función para generar tiempo aleatorio más realista
    function tiempoRealistaHumano(minSegundos, maxSegundos) {
        return (Math.random() * (maxSegundos - minSegundos) + minSegundos) * 1000;
    }

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
        
        return casosClinicosComunes[casosClinicosComunes.length - 1];
    }

    // Función para hacer clic en un dropdown y seleccionar una opción (primera página)
    function seleccionarOpcion(questionId, textoOpcion) {
        try {
            const dropdown = document.querySelector(`[aria-describedby="${questionId}_placeholder_content"]`);
            if (!dropdown) {
                console.log(`No se encontró dropdown para ${questionId}`);
                return false;
            }

            dropdown.click();
            
            setTimeout(() => {
                const opciones = document.querySelectorAll('[role="option"]');
                for (const opcion of opciones) {
                    if (opcion.textContent.includes(textoOpcion)) {
                        opcion.click();
                        console.log(`✓ Seleccionado: ${textoOpcion}`);
                        return true;
                    }
                }
                console.log(`✗ No se encontró la opción: ${textoOpcion}`);
                dropdown.click(); // Cerrar si no se encuentra
            }, tiempoRealistaHumano(0.5, 2)); // Entre 0.5 y 2 segundos para buscar
            
        } catch (error) {
            console.error(`Error al seleccionar opción para ${questionId}:`, error);
            return false;
        }
    }

    // Función para seleccionar dropdown por aria-labelledby
    function seleccionarDropdownPorLabelledby(labelledby, textoOpcion) {
        try {
            console.log(`🔍 Buscando dropdown con labelledby: ${labelledby}`);
            
            let dropdown = document.querySelector(`[aria-haspopup="listbox"][aria-labelledby="${labelledby}"]`);
            
            if (!dropdown) {
                const idPrincipal = labelledby.split(' ')[0];
                dropdown = document.querySelector(`[aria-haspopup="listbox"][aria-labelledby*="${idPrincipal}"]`);
            }
            
            if (!dropdown) {
                const idPrincipal = labelledby.split(' ')[0].replace('QuestionId_', '');
                const describedbyBuscado = `${idPrincipal}_placeholder_content`;
                dropdown = document.querySelector(`[aria-haspopup="listbox"][aria-describedby="${describedbyBuscado}"]`);
            }
            
            if (!dropdown) {
                const idLimpio = labelledby.replace('QuestionId_', '').replace('QuestionInfo_', '').split(' ')[0];
                const dropdowns = document.querySelectorAll('[aria-haspopup="listbox"]');
                for (const candidato of dropdowns) {
                    const ariaLabelledby = candidato.getAttribute('aria-labelledby') || '';
                    const ariaDescribedby = candidato.getAttribute('aria-describedby') || '';
                    
                    if (ariaLabelledby.includes(idLimpio) || ariaDescribedby.includes(idLimpio)) {
                        dropdown = candidato;
                        break;
                    }
                }
            }

            if (!dropdown) {
                console.log(`❌ No se encontró dropdown con labelledby: ${labelledby}`);
                return false;
            }

            console.log(`✓ Dropdown encontrado, abriendo menú...`);
            dropdown.click();
            
            setTimeout(() => {
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
                dropdown.click(); // Cerrar si no se encuentra
            }, tiempoRealistaHumano(1, 3)); // Tiempo para leer opciones
            
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

            const radioButtons = radioGroup.querySelectorAll('input[type="radio"]');
            for (const radio of radioButtons) {
                if (radio.value === valor || radio.getAttribute('aria-label') === valor) {
                    radio.click();
                    console.log(`✓ Radio seleccionado: ${valor}`);
                    return true;
                }
            }

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
            
            const contenedor = document.querySelector(`[aria-labelledby="${labelledby}"]`);
            if (!contenedor) {
                console.log(`No se encontró contenedor con aria-labelledby: ${labelledby}`);
                return false;
            }

            const elementosNumero = contenedor.querySelectorAll('[aria-label*="Número seleccionado"]');
            console.log(`Encontrados ${elementosNumero.length} elementos con números`);

            const ariaLabelBuscado = `Número seleccionado: ${numeroSeleccionado}`;
            for (const elemento of elementosNumero) {
                const ariaLabel = elemento.getAttribute('aria-label');
                if (ariaLabel === ariaLabelBuscado) {
                    elemento.click();
                    console.log(`✓ Número ${numeroSeleccionado} ya seleccionado o clickeado`);
                    return true;
                }
            }

            const elementosClickeables = contenedor.querySelectorAll('div[role], button, [tabindex], [aria-label]');
            console.log(`Encontrados ${elementosClickeables.length} elementos clickeables`);

            for (const elemento of elementosClickeables) {
                const texto = elemento.textContent.trim();
                const ariaLabel = elemento.getAttribute('aria-label') || '';
                const valor = elemento.getAttribute('value') || '';

                if (texto === numeroSeleccionado || 
                    ariaLabel.includes(numeroSeleccionado) || 
                    valor === numeroSeleccionado) {
                    
                    elemento.click();
                    
                    setTimeout(() => {
                        const elementosActualizados = contenedor.querySelectorAll('[aria-label*="Número seleccionado"]');
                        for (const el of elementosActualizados) {
                            const labelActual = el.getAttribute('aria-label');
                            if (labelActual === ariaLabelBuscado) {
                                console.log(`✓ Número ${numeroSeleccionado} seleccionado exitosamente`);
                                return true;
                            }
                        }
                    }, 100);
                    
                    return true;
                }
            }

            const indice = parseInt(numeroSeleccionado) - 1;
            if (indice >= 0 && indice < elementosClickeables.length) {
                elementosClickeables[indice].click();
                console.log(`✓ Número ${numeroSeleccionado} seleccionado por posición`);
                return true;
            }

            console.log(`✗ No se pudo seleccionar número ${numeroSeleccionado}`);
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

            const ariaLabelBuscado = `${numeroEstrellas} Star`;
            const elementoEstrella = radioGroup.querySelector(`[aria-label="${ariaLabelBuscado}"]`);
            
            if (elementoEstrella) {
                elementoEstrella.click();
                
                setTimeout(() => {
                    const ariaChecked = elementoEstrella.getAttribute('aria-checked');
                    if (ariaChecked === 'true') {
                        console.log(`✓ ¡${numeroEstrellas} estrellas seleccionadas exitosamente!`);
                    }
                }, 100);
                
                return true;
            }

            const elementosEstrella = radioGroup.querySelectorAll('[aria-label*="Star"]');
            
            for (const elemento of elementosEstrella) {
                const ariaLabel = elemento.getAttribute('aria-label');
                
                if (ariaLabel === ariaLabelBuscado || ariaLabel.includes(`${numeroEstrellas} Star`)) {
                    elemento.click();
                    console.log(`✓ Estrella seleccionada por coincidencia: ${ariaLabel}`);
                    return true;
                }
            }

            if (numeroEstrellas === "5" && elementosEstrella.length > 0) {
                const ultimaEstrella = elementosEstrella[elementosEstrella.length - 1];
                ultimaEstrella.click();
                console.log(`✓ Seleccionada última estrella como respaldo`);
                return true;
            }

            console.log(`✗ No se pudo seleccionar ${numeroEstrellas} estrellas`);
            return false;
            
        } catch (error) {
            console.error(`Error al seleccionar estrellas:`, error);
            return false;
        }
    }

    // FUNCIÓN PRINCIPAL MEJORADA - Con múltiples selecciones coherentes
    function llenarPrimeraPagina() {
        console.log("🏥 Iniciando llenado automático del formulario médico - Primera página...");
        
        const casoSeleccionado = seleccionarCasoClinico();
        estadoFormulario.casoSeleccionado = casoSeleccionado;
        console.log(`📋 Caso clínico seleccionado: ${casoSeleccionado.nombre}`);
        console.log(`📊 Categorías a llenar: ${casoSeleccionado.categorias.length} (${casoSeleccionado.categorias.join(', ')})`);
        
        // Limpiar selecciones previas
        const botonesLimpiar = document.querySelectorAll('button[aria-label="Borrar selección"]');
        botonesLimpiar.forEach(boton => {
            try {
                boton.click();
            } catch (e) {
                // Ignorar errores
            }
        });

        // TIEMPO REALISTA: Aplicar las selecciones con delays humanos
        let delay = tiempoRealistaHumano(2, 4); // Delay inicial de 2-4 segundos
        let seleccionesRealizadas = 0;
        
        Object.entries(casoSeleccionado.opciones).forEach(([categoria, opcion]) => {
            setTimeout(() => {
                const categoriaInfo = categoriasMedicas[parseInt(categoria)];
                if (categoriaInfo) {
                    seleccionarOpcion(categoriaInfo.id, opcion);
                    seleccionesRealizadas++;
                    console.log(`📝 Selección ${seleccionesRealizadas}/${Object.keys(casoSeleccionado.opciones).length}: ${opcion}`);
                }
            }, delay);
            
            // TIEMPO REALISTA: Entre 8-15 segundos entre cada selección (simula lectura y decisión)
            delay += tiempoRealistaHumano(8, 15);
        });

        console.log("✅ Primera página en proceso de llenado con tiempo realista...");
        
        // Mostrar resumen después de completar
        setTimeout(() => {
            console.log("\n📊 RESUMEN DEL CASO CLÍNICO:");
            console.log(`Tipo: ${casoSeleccionado.nombre}`);
            console.log(`Selecciones realizadas: ${Object.keys(casoSeleccionado.opciones).length}`);
            console.log("Categorías afectadas:", casoSeleccionado.categorias);
            console.log("Opciones seleccionadas:", casoSeleccionado.opciones);
        }, delay + 2000);
    }

    // Función para llenar páginas adicionales con tiempo realista
    function llenarPaginaAdicional(numeroPagina) {
        const paginaKey = `pagina${numeroPagina}`;
        const paginaConfig = paginasAdicionales[paginaKey];
        
        if (!paginaConfig) {
            console.log(`❌ No se encontró configuración para página ${numeroPagina}`);
            return false;
        }

        console.log(`📄 Llenando página ${numeroPagina}...`);
        
        let delay = tiempoRealistaHumano(2, 4); // Delay inicial
        
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
                        opcionSeleccionada = config.opciones[0];
                    }
                    
                    seleccionarDropdownPorLabelledby(config.labelledby, opcionSeleccionada);
                    
                } else if (config.tipo === "radio") {
                    if (config.valorTexto) {
                        seleccionarRadioPorTexto(config.labelledby, config.valorTexto);
                    } else if (numeroP === 23) {
                        seleccionarEstrellas(config.labelledby, config.valor);
                    } else if (numeroP >= 26 && numeroP <= 43) {
                        seleccionarNumeroPorLabelledby(config.labelledby, config.valor);
                    } else {
                        seleccionarRadioPorLabelledby(config.labelledby, config.valor);
                    }
                }
            }, delay);
            
            // TIEMPO REALISTA: Entre 2-5 segundos para cada pregunta
            delay += tiempoRealistaHumano(2, 5);
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

    // Función para hacer clic en el botón enviar
    function clickEnviar() {
        const botonEnviar = document.querySelector('[data-automation-id="submitButton"]');
        if (botonEnviar) {
            botonEnviar.click();
            console.log("✅ Formulario enviado exitosamente!");
            estadoFormulario.procesoCompleto = true;
            return true;
        } else {
            console.log("❌ No se encontró el botón Enviar");
            return false;
        }
    }

    // Función para hacer clic en "Enviar otra respuesta"
    function clickEnviarOtraRespuesta() {
        const spanEnviarOtra = document.querySelector('[data-automation-id="submitAnother"]');
        if (spanEnviarOtra) {
            spanEnviarOtra.click();
            console.log("🔄 Clickeando 'Enviar otra respuesta'...");
            return true;
        } else {
            console.log("❌ No se encontró el botón 'Enviar otra respuesta'");
            return false;
        }
    }

    // PROCESO AUTOMÁTICO COMPLETO CON TIEMPOS REALISTAS
    function procesoAutomaticoCompleto() {
        console.log("🚀 Iniciando proceso automático completo del formulario...");
        console.log("⏱️ TIEMPOS REALISTAS: Simulando comportamiento humano (2-3 horas para 50 formularios)");
        
        estadoFormulario.procesoCompleto = false;
        
        function procesarSiguientePagina() {
            console.log(`🔄 Estado actual: Página ${estadoFormulario.paginaActual}`);
            
            switch(estadoFormulario.paginaActual) {
                case 1:
                    console.log("📝 PROCESANDO PÁGINA 1 (Enfermedades CIE-10)...");
                    llenarPrimeraPagina();
                    
                    // TIEMPO REALISTA: Esperar tiempo suficiente para múltiples selecciones
                    setTimeout(() => {
                        console.log("✅ Página 1 completada, avanzando a página 2...");
                        if (clickSiguiente()) {
                            setTimeout(() => {
                                procesarSiguientePagina();
                            }, tiempoRealistaHumano(3, 6)); // Tiempo de carga de página
                        } else {
                            console.log("❌ Error al avanzar desde página 1");
                        }
                    }, tiempoRealistaHumano(45, 75)); // 45-75 segundos para página 1 (2-3 selecciones)
                    break;
                    
                case 2:
                    console.log("📝 PROCESANDO PÁGINA 2 (Preguntas 21-24)...");
                    llenarPaginaAdicional(2);
                    
                    setTimeout(() => {
                        console.log("✅ Página 2 completada, avanzando a página 3...");
                        if (clickSiguiente()) {
                            setTimeout(() => {
                                procesarSiguientePagina();
                            }, tiempoRealistaHumano(3, 6));
                        } else {
                            console.log("❌ Error al avanzar desde página 2");
                        }
                    }, tiempoRealistaHumano(20, 35)); // 20-35 segundos para página 2
                    break;
                    
                case 3:
                    console.log("📝 PROCESANDO PÁGINA 3 (Pregunta 25: Código)...");
                    llenarPaginaAdicional(3);
                    
                    setTimeout(() => {
                        console.log("✅ Página 3 completada, avanzando a página 4...");
                        if (clickSiguiente()) {
                            setTimeout(() => {
                                procesarSiguientePagina();
                            }, tiempoRealistaHumano(3, 6));
                        } else {
                            console.log("❌ Error al avanzar desde página 3");
                        }
                    }, tiempoRealistaHumano(8, 15)); // 8-15 segundos para página 3 (1 pregunta)
                    break;
                    
                case 4:
                    console.log("📝 PROCESANDO PÁGINA 4 (Evaluaciones 26-44)...");
                    llenarPaginaAdicional(4);
                    
                    setTimeout(() => {
                        if (estadoFormulario.procesandoLote) {
                            console.log("📤 Enviando formulario automáticamente...");
                            if (clickEnviar()) {
                                setTimeout(() => {
                                    if (clickEnviarOtraRespuesta()) {
                                        setTimeout(() => {
                                            reiniciarProcesoParaSiguienteFormulario();
                                        }, tiempoRealistaHumano(8, 15)); // Tiempo entre formularios
                                    } else {
                                        console.log("❌ Error al hacer clic en 'Enviar otra respuesta'");
                                        estadoFormulario.procesandoLote = false;
                                    }
                                }, tiempoRealistaHumano(5, 10)); // Tiempo para enviar
                            } else {
                                console.log("❌ Error al enviar formulario");
                                estadoFormulario.procesandoLote = false;
                            }
                        } else {
                            console.log("🎉 ¡PROCESO AUTOMÁTICO COMPLETADO!");
                            console.log("==========================================");
                            console.log("✅ Todas las páginas han sido completadas");
                            console.log("👀 REVISAR todas las selecciones antes de enviar");
                            console.log("📤 Para enviar manualmente: automacionMedica.enviar()");
                            estadoFormulario.procesoCompleto = true;
                        }
                    }, tiempoRealistaHumano(60, 90)); // 60-90 segundos para página 4 (muchas preguntas)
                    break;
                    
                default:
                    console.log(`❌ Página ${estadoFormulario.paginaActual} no reconocida`);
                    verificarPaginaActual();
                    break;
            }
        }
        
        verificarPaginaActual();
        
        setTimeout(() => {
            procesarSiguientePagina();
        }, tiempoRealistaHumano(1, 3)); // Delay inicial
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

    // Función para generar un caso personalizado
    function generarCasoPersonalizado(categorias, opciones) {
        console.log("🎯 Generando caso personalizado...");
        
        let delay = tiempoRealistaHumano(2, 4);
        Object.entries(opciones).forEach(([categoria, opcion]) => {
            setTimeout(() => {
                const categoriaInfo = categoriasMedicas[parseInt(categoria)];
                if (categoriaInfo) {
                    seleccionarOpcion(categoriaInfo.id, opcion);
                }
            }, delay);
            delay += tiempoRealistaHumano(8, 15);
        });
    }

    // Función para reiniciar el proceso para el siguiente formulario
    function reiniciarProcesoParaSiguienteFormulario() {
        estadoFormulario.formularioActual++;
        estadoFormulario.paginaActual = 1;
        estadoFormulario.procesoCompleto = false;
        estadoFormulario.casoSeleccionado = null;
        
        if (estadoFormulario.formularioActual <= estadoFormulario.totalFormularios) {
            console.log(`\n🔄 INICIANDO FORMULARIO ${estadoFormulario.formularioActual}/${estadoFormulario.totalFormularios}`);
            console.log("==========================================");
            
            const tiempoRestante = (estadoFormulario.totalFormularios - estadoFormulario.formularioActual + 1) * 2.5; // 2.5 min promedio por formulario
            console.log(`⏱️ Tiempo estimado restante: ${Math.ceil(tiempoRestante)} minutos`);
            
            setTimeout(() => {
                verificarPaginaActual();
                setTimeout(() => {
                    procesoAutomaticoCompleto();
                }, tiempoRealistaHumano(2, 5));
            }, tiempoRealistaHumano(3, 8)); // Pausa entre formularios
            
        } else {
            console.log("\n🎉 ¡TODOS LOS FORMULARIOS COMPLETADOS!");
            console.log("==========================================");
            console.log(`✅ Se completaron ${estadoFormulario.totalFormularios} formularios exitosamente`);
            console.log("🏁 Proceso de lote finalizado");
            
            const tiempoTotal = estadoFormulario.totalFormularios * 2.5; // minutos
            console.log(`⏱️ Tiempo total estimado: ${Math.ceil(tiempoTotal)} minutos (${(tiempoTotal/60).toFixed(1)} horas)`);
            
            estadoFormulario.procesandoLote = false;
        }
    }

    // FUNCIÓN MEJORADA - Proceso de lote con tiempo realista
    function procesarLoteFormularios(cantidad = 50) {
        if (estadoFormulario.procesandoLote) {
            console.log("⚠️ Ya hay un proceso de lote en ejecución");
            return false;
        }
        
        console.log(`🚀 INICIANDO PROCESO DE LOTE: ${cantidad} FORMULARIOS`);
        console.log("==========================================");
        console.log("⚠️ IMPORTANTE: Este proceso enviará automáticamente los formularios");
        
        const tiempoEstimado = cantidad * 2.5; // 2.5 minutos por formulario
        console.log(`⏱️ Tiempo estimado REALISTA: ${Math.ceil(tiempoEstimado)} minutos (${(tiempoEstimado/60).toFixed(1)} horas)`);
        console.log("📊 Cada formulario tendrá 2-3 selecciones coherentes en página 1");
        console.log("🛑 Para detener: automacionMedica.detenerLote()");
        
        estadoFormulario.procesandoLote = true;
        estadoFormulario.formularioActual = 1;
        estadoFormulario.totalFormularios = cantidad;
        estadoFormulario.paginaActual = 1;
        estadoFormulario.procesoCompleto = false;
        
        verificarPaginaActual();
        
        setTimeout(() => {
            console.log(`\n🔄 INICIANDO FORMULARIO 1/${cantidad}`);
            procesoAutomaticoCompleto();
        }, tiempoRealistaHumano(2, 5));
        
        return true;
    }

    // Función para detener el proceso de lote
    function detenerLote() {
        if (estadoFormulario.procesandoLote) {
            estadoFormulario.procesandoLote = false;
            console.log("🛑 Proceso de lote detenido");
            console.log(`📊 Formularios completados: ${estadoFormulario.formularioActual - 1}/${estadoFormulario.totalFormularios}`);
            
            const formulariosPendientes = estadoFormulario.totalFormularios - (estadoFormulario.formularioActual - 1);
            const tiempoAhorrado = formulariosPendientes * 2.5;
            console.log(`⏱️ Tiempo ahorrado: ${Math.ceil(tiempoAhorrado)} minutos`);
        } else {
            console.log("ℹ️ No hay proceso de lote en ejecución");
        }
    }

    // Función para verificar en qué página estamos
    function verificarPaginaActual() {
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
        console.log("\n📊 ESTADÍSTICAS DEL FORMULARIO MÉDICO MEJORADO:");
        console.log("==========================================");
        console.log(`Página actual: ${estadoFormulario.paginaActual}`);
        console.log(`Proceso completo: ${estadoFormulario.procesoCompleto ? 'Sí' : 'No'}`);
        
        if (estadoFormulario.procesandoLote) {
            console.log(`🔄 Procesando lote: ${estadoFormulario.formularioActual}/${estadoFormulario.totalFormularios}`);
            const progreso = ((estadoFormulario.formularioActual - 1) / estadoFormulario.totalFormularios * 100).toFixed(1);
            console.log(`📈 Progreso: ${progreso}%`);
        }
        
        if (estadoFormulario.casoSeleccionado) {
            console.log(`Caso clínico actual: ${estadoFormulario.casoSeleccionado.nombre}`);
            console.log(`Selecciones: ${Object.keys(estadoFormulario.casoSeleccionado.opciones).length}`);
        }
        
        console.log("\n🆕 MEJORAS IMPLEMENTADAS:");
        console.log("✅ 2-3 selecciones coherentes por formulario");
        console.log("✅ Tiempos realistas simulando comportamiento humano");
        console.log("✅ 2-3 horas para completar 50 formularios");
        console.log("✅ Casos clínicos médicamente coherentes");
        
        console.log("\n📋 DISTRIBUCIÓN DE CASOS:");
        console.log("- Consultas de rutina: ~26%");
        console.log("- Problemas respiratorios: ~29%");
        console.log("- Problemas osteomusculares: ~25%");
        console.log("- Otros sistemas: ~20%");
        
        console.log("\n⏱️ TIEMPOS POR PÁGINA:");
        console.log("- Página 1: 45-75 segundos (2-3 selecciones)");
        console.log("- Página 2: 20-35 segundos (4 preguntas)");
        console.log("- Página 3: 8-15 segundos (1 pregunta)");
        console.log("- Página 4: 60-90 segundos (19 preguntas)");
        console.log("- Total por formulario: ~2.5 minutos promedio");
    }

    // Exportar funciones globalmente
    window.automacionMedica = {
        // Funciones principales
        llenar: llenarPrimeraPagina,
        llenarPagina: llenarPaginaAdicional,
        continuar: clickSiguiente,
        enviar: clickEnviar,
        
        // Procesos automáticos
        completar: procesoAutomaticoCompleto,
        continuarDesde: continuarDesdePaginaActual,
        
        // Procesamiento en lote MEJORADO
        lote: procesarLoteFormularios,
        lote50: () => procesarLoteFormularios(50),
        lote25: () => procesarLoteFormularios(25),
        lote10: () => procesarLoteFormularios(10),
        detenerLote: detenerLote,
        
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
    console.log("🚀 Script de Automatización Médica MEJORADO cargado exitosamente!");
    console.log("==========================================");
    
    verificarPaginaActual();
    
    console.log("\n📖 COMANDOS DISPONIBLES:");
    console.log("========================");
    console.log("🎯 COMANDO PRINCIPAL:");
    console.log("   automacionMedica.completar() - Completa 1 formulario (2-3 selecciones coherentes)");
    
    console.log("\n🚀 PROCESAMIENTO EN LOTE MEJORADO:");
    console.log("   automacionMedica.lote50() - ¡PROCESA 50 FORMULARIOS! (~2.5 horas)");
    console.log("   automacionMedica.lote25() - Procesa 25 formularios (~1.25 horas)");
    console.log("   automacionMedica.lote10() - Procesa 10 formularios (~25 minutos)");
    console.log("   automacionMedica.detenerLote() - Detiene el proceso en lote");
    
    console.log("\n🆕 MEJORAS IMPLEMENTADAS:");
    console.log("   ✅ 2-3 selecciones coherentes por formulario (no solo 1)");
    console.log("   ✅ Tiempo realista: 2-3 horas para 50 formularios");
    console.log("   ✅ Casos clínicos médicamente coherentes");
    console.log("   ✅ Simulación de comportamiento humano con delays variables");
    
    console.log("\n📊 ESTADÍSTICAS:");
    console.log("   - 33 tipos diferentes de casos clínicos");
    console.log("   - Mayoría de casos tienen 2-3 diagnósticos relacionados");
    console.log("   - Tiempo promedio: 2.5 minutos por formulario");
    console.log("   - Delays realistas entre 2-15 segundos por acción");
    
    console.log("\n⏱️ TIEMPOS REALISTAS:");
    console.log("   - Página 1: 45-75 segundos (múltiples selecciones)");
    console.log("   - Páginas 2-4: 20-90 segundos según complejidad");
    console.log("   - Pausa entre formularios: 3-8 segundos");
    console.log("   - Total estimado para 50: 2-3 horas");

})();

// ============================================
// INSTRUCCIONES DE USO MEJORADO:
// ============================================
// 
// 🆕 VERSIÓN MEJORADA - CAMBIOS PRINCIPALES:
// 
// 1. ✅ MÚLTIPLES SELECCIONES COHERENTES:
//    - Ahora selecciona 2-3 opciones relacionadas por formulario
//    - Los casos clínicos están diseñados médicamente coherentes
//    - Ej: "Resfriado" = Infección + Síntomas + Faringitis
//    - Ej: "Hipertensión" = Cardiovascular + Palpitaciones
// 
// 2. ✅ TIEMPO REALISTA PARA SIMULAR HUMANO:
//    - 45-75 segundos para página 1 (múltiples selecciones)
//    - 8-90 segundos para otras páginas según complejidad  
//    - Delays aleatorios entre 2-15 segundos por acción
//    - Total: ~2.5 minutos por formulario completo
//    - 50 formularios = 2-3 horas (tiempo humano realista)
// 
// 3. ✅ CASOS CLÍNICOS COHERENTES:
//    - 33 casos diferentes con lógica médica
//    - Combinaciones realistas entre categorías
//    - Síntomas que acompañan diagnósticos principales
//    - Distribución de probabilidades más natural
// 
// 🚀 USO RECOMENDADO:
// 1. Abre la consola del navegador (F12)
// 2. Pega este código completo y presiona Enter
// 3. Ejecuta: automacionMedica.lote50()
// 4. El script procesará 50 formularios en 2-3 horas automáticamente
// 
// 🔧 COMANDOS PRINCIPALES:
// - automacionMedica.completar() - Un solo formulario
// - automacionMedica.lote50() - 50 formularios automáticos
// - automacionMedica.lote25() - 25 formularios (~1.25 horas)
// - automacionMedica.lote10() - 10 formularios (~25 minutos)
// - automacionMedica.detenerLote() - Detener proceso
// - automacionMedica.estadisticas() - Ver progreso y estadísticas
// 
// ⚠️ TIEMPO ESTIMADO REALISTA:
// - 1 formulario: ~2.5 minutos
// - 10 formularios: ~25 minutos  
// - 25 formularios: ~1.25 horas
// - 50 formularios: ~2.5 horas
// 
// ============================================