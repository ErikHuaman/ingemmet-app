import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { IntranetService } from 'src/app/services/intranet.service';
import { ServiceService } from '../../service.service';

declare var $: any;

@Component({
  selector: 'app-noticias-card',
  templateUrl: './noticias-card.component.html',
})
export class NoticiasCardComponent implements OnInit {
  noticiasList:any = [];
  noticias:any = [];
  noticiaAll:any = {
    "data": {
        "id": "303695436",
        "type": "search",
        "attributes": {
            "suggestions": [
                null,
                false
            ],
            "tupas": null,
            "filters": {
                "content_types": {
                    "todos": 4906,
                    "servicios": 48,
                    "noticias": 517,
                    "normas": 2474,
                    "publicaciones": 1810,
                    "campañas": 26,
                    "instituciones": 0,
                    "servidores": 27,
                    "institucional": 4,
                    "otros": 0
                },
                "categories": [
                    {
                        "value": "50-accesibilidad",
                        "label": "Accesibilidad"
                    },
                    {
                        "value": "47-accesibilidad-e-inclusion",
                        "label": "Accesibilidad e Inclusión"
                    },
                    {
                        "value": "68-arquitectura-digital",
                        "label": "Arquitectura digital"
                    },
                    {
                        "value": "3-ciencia-tecnologia-e-innovacion",
                        "label": "Ciencia, Tecnología e Innovación"
                    },
                    {
                        "value": "7-comercio-negocio-y-emprendimiento",
                        "label": "Comercio, Negocio y Emprendimiento"
                    },
                    {
                        "value": "52-comunicaciones",
                        "label": "Comunicaciones"
                    },
                    {
                        "value": "46-economia-y-finanzas",
                        "label": "Economía y Finanzas"
                    },
                    {
                        "value": "10-educacion",
                        "label": "Educación"
                    },
                    {
                        "value": "45-energia",
                        "label": "Energía"
                    },
                    {
                        "value": "4-energia-y-minas",
                        "label": "Energía y Minas"
                    },
                    {
                        "value": "61-gestion-publica",
                        "label": "Gestión pública"
                    },
                    {
                        "value": "51-inclusion",
                        "label": "Inclusión"
                    },
                    {
                        "value": "2-inmuebles-y-vivienda",
                        "label": "Inmuebles y Vivienda"
                    },
                    {
                        "value": "5-medio-ambiente",
                        "label": "Medio Ambiente"
                    },
                    {
                        "value": "44-mineria",
                        "label": "Minería"
                    },
                    {
                        "value": "17-otros",
                        "label": "Otros"
                    },
                    {
                        "value": "6-salud",
                        "label": "Salud"
                    },
                    {
                        "value": "34-transparencia-e-integridad",
                        "label": "Transparencia e integridad"
                    }
                ],
                "segments": [],
                "institutions": [
                    {
                        "value": "ingemmet",
                        "label": "Instituto Geológico, Minero y Metalúrgico"
                    }
                ],
                "group_rule_types": [
                    {
                        "value": "2-circular",
                        "label": "Circular"
                    },
                    {
                        "value": "6-decretos",
                        "label": "Decretos"
                    },
                    {
                        "value": "18-resoluciones",
                        "label": "Resoluciones"
                    }
                ],
                "group_report_types": [
                    {
                        "value": "21-actas",
                        "label": "Actas"
                    },
                    {
                        "value": "25-documentos-de-gestion",
                        "label": "Documentos de gestión"
                    },
                    {
                        "value": "28-fichas-formatos-y-formularios",
                        "label": "Fichas, formatos y formularios"
                    },
                    {
                        "value": "23-graficos",
                        "label": "Gráficos"
                    },
                    {
                        "value": "36-guias",
                        "label": "Guías"
                    },
                    {
                        "value": "31-informes",
                        "label": "Informes"
                    },
                    {
                        "value": "34-institucional",
                        "label": "Institucional"
                    },
                    {
                        "value": "30-otros",
                        "label": "Otros"
                    },
                    {
                        "value": "24-proyectos",
                        "label": "Proyectos"
                    },
                    {
                        "value": "22-publicaciones",
                        "label": "Publicaciones"
                    }
                ],
                "feed_types": [
                    {
                        "value": "3-comunicado",
                        "label": "Comunicado"
                    },
                    {
                        "value": "4-discurso",
                        "label": "Discurso"
                    },
                    {
                        "value": "1-nota-de-prensa",
                        "label": "Nota de Prensa"
                    },
                    {
                        "value": "2-nota-informativa",
                        "label": "Nota Informativa"
                    }
                ]
            },
            "total_count": 517,
            "results": [
                {
                    "id": "3031116",
                    "document_type": false,
                    "expired_campaign": false,
                    "publication": "14 de octubre de 2022 -  4:25 p. m.",
                    "subject": null,
                    "name_with_parent": "Ingemmet y la Dirección Desconcentrada de Cultura de Cusco iniciaron estudios geológicos en el Parque Arqueológico Nacional de Saqsaywaman",
                    "collections": [],
                    "url": "<a class=\"track-ga-click\" data-origin=\"result-feed-660477\" href=\"/institucion/ingemmet/noticias/660477-ingemmet-y-la-direccion-desconcentrada-de-cultura-de-cusco-iniciaron-estudios-geologicos-en-el-parque-arqueologico-nacional-de-saqsaywaman\">Ingemmet y la Dirección Desconcentrada de Cultura de Cusco iniciaron estudios geológicos en el Parque Arqueológico Nacional de Saqsaywaman</a>",
                    "searchable_type": "Feed",
                    "official_document_type": null,
                    "page_kind": null,
                    "content_sub_title_card": "Instituto Geológico, Minero y Metalúrgico",
                    "content": "El Instituto Geológico, Minero y Metalúrgico (Ingemmet) brinda soporte técnico-cientifico para la Reducción del Riesgo de Desastres en nuestro país, como parte de sus ...",
                    "image_url": null,
                    "action_url": null,
                    "children_pages": null,
                    "fake_type": null,
                    "disabled": null,
                    "score": 60.0,
                    "last_week_visits": 4
                },
                {
                    "id": "3031102",
                    "document_type": false,
                    "expired_campaign": false,
                    "publication": "14 de octubre de 2022 -  4:25 p. m.",
                    "subject": null,
                    "name_with_parent": "Ingemmet y la Dirección Desconcentrada de Cultura de Cusco iniciaron estudios geológicos en el Parque Arqueológico Nacional de Saqsaywaman",
                    "collections": [],
                    "url": "<a class=\"track-ga-click\" data-origin=\"result-feed-660532\" href=\"/institucion/ingemmet/noticias/660532-ingemmet-y-la-direccion-desconcentrada-de-cultura-de-cusco-iniciaron-estudios-geologicos-en-el-parque-arqueologico-nacional-de-saqsaywaman\">Ingemmet y la Dirección Desconcentrada de Cultura de Cusco iniciaron estudios geológicos en el Parque Arqueológico Nacional de Saqsaywaman</a>",
                    "searchable_type": "Feed",
                    "official_document_type": null,
                    "page_kind": null,
                    "content_sub_title_card": "Instituto Geológico, Minero y Metalúrgico",
                    "content": "El Instituto Geológico, Minero y Metalúrgico (Ingemmet) brinda soporte técnico-cientifico para la Reducción del Riesgo de Desastres en nuestro país, como parte de sus ...",
                    "image_url": null,
                    "action_url": null,
                    "children_pages": null,
                    "fake_type": null,
                    "disabled": null,
                    "score": 60.0,
                    "last_week_visits": 2
                },
                {
                    "id": "3019450",
                    "document_type": false,
                    "expired_campaign": false,
                    "publication": "11 de octubre de 2022 - 12:16 p. m.",
                    "subject": null,
                    "name_with_parent": "Concurso a la mejor tesis del 2022 lo gana investigadora del Ingemmet",
                    "collections": [],
                    "url": "<a class=\"track-ga-click\" data-origin=\"result-feed-659147\" href=\"/institucion/ingemmet/noticias/659147-concurso-a-la-mejor-tesis-del-2022-lo-gana-investigadora-del-ingemmet\">Concurso a la mejor tesis del 2022 lo gana investigadora del Ingemmet</a>",
                    "searchable_type": "Feed",
                    "official_document_type": null,
                    "page_kind": null,
                    "content_sub_title_card": "Instituto Geológico, Minero y Metalúrgico",
                    "content": "El estudio desarrollado por la investigadora del Instituto Geológico, Minero y Metalúrgico (Ingemmet), Ing. Geóloga Carla Arias Salazar, fue ganador del concurso de t ...",
                    "image_url": null,
                    "action_url": null,
                    "children_pages": null,
                    "fake_type": null,
                    "disabled": null,
                    "score": 60.0,
                    "last_week_visits": 242
                },
                {
                    "id": "3019212",
                    "document_type": false,
                    "expired_campaign": false,
                    "publication": "11 de octubre de 2022 - 11:24 a. m.",
                    "subject": null,
                    "name_with_parent": "Ingemmet en taller del ASGMI: El 77% del territorio peruano cuenta con un muestreo de suelos a escala global",
                    "collections": [],
                    "url": "<a class=\"track-ga-click\" data-origin=\"result-feed-659132\" href=\"/institucion/ingemmet/noticias/659132-ingemmet-en-taller-del-asgmi-el-77-del-territorio-peruano-cuenta-con-un-muestreo-de-suelos-a-escala-global\">Ingemmet en taller del ASGMI: El 77% del territorio peruano cuenta con un muestreo de suelos a escala global</a>",
                    "searchable_type": "Feed",
                    "official_document_type": null,
                    "page_kind": null,
                    "content_sub_title_card": "Instituto Geológico, Minero y Metalúrgico",
                    "content": "El Instituto Geológico, Minero y Metalúrgico (Ingemmet) participó en el taller “Información Geoquímica para la Sociedad”, organizado por el Servicio Geológico Colombi ...",
                    "image_url": null,
                    "action_url": null,
                    "children_pages": null,
                    "fake_type": null,
                    "disabled": null,
                    "score": 60.0,
                    "last_week_visits": 17
                },
                {
                    "id": "3000145",
                    "document_type": false,
                    "expired_campaign": false,
                    "publication": " 4 de octubre de 2022 -  4:53 p. m.",
                    "subject": null,
                    "name_with_parent": "Ingemmet rinde homenaje a los Ingenieros Geólogos en ceremonia organizada por el Colegio de Ingenieros del Perú",
                    "collections": [],
                    "url": "<a class=\"track-ga-click\" data-origin=\"result-feed-657236\" href=\"/institucion/ingemmet/noticias/657236-ingemmet-rinde-homenaje-a-los-ingenieros-geologos-en-ceremonia-organizada-por-el-colegio-de-ingenieros-del-peru\">Ingemmet rinde homenaje a los Ingenieros Geólogos en ceremonia organizada por el Colegio de Ingenieros del Perú</a>",
                    "searchable_type": "Feed",
                    "official_document_type": null,
                    "page_kind": null,
                    "content_sub_title_card": "Instituto Geológico, Minero y Metalúrgico",
                    "content": "En el marco conmemorativo por el Día del Ingeniero Geólogo, el Instituto Geológico, Minero y Metalúrgico (Ingemmet) participó en la ceremonia organizada por el Colegi ...",
                    "image_url": null,
                    "action_url": null,
                    "children_pages": null,
                    "fake_type": null,
                    "disabled": null,
                    "score": 60.0,
                    "last_week_visits": 11
                },
                {
                    "id": "2999339",
                    "document_type": false,
                    "expired_campaign": false,
                    "publication": " 4 de octubre de 2022 -  2:54 p. m.",
                    "subject": null,
                    "name_with_parent": "Ingemmet y la Universidad Federico Villarreal continúan sus investigaciones sobre volcanismo submarino en la Antártida",
                    "collections": [],
                    "url": "<a class=\"track-ga-click\" data-origin=\"result-feed-657191\" href=\"/institucion/ingemmet/noticias/657191-ingemmet-y-la-universidad-federico-villarreal-continuan-sus-investigaciones-sobre-volcanismo-submarino-en-la-antartida\">Ingemmet y la Universidad Federico Villarreal continúan sus investigaciones sobre volcanismo submarino en la Antártida</a>",
                    "searchable_type": "Feed",
                    "official_document_type": null,
                    "page_kind": null,
                    "content_sub_title_card": "Instituto Geológico, Minero y Metalúrgico",
                    "content": "En una reunión de cooperación técnico – científica, los investigadores del programa de Geología de la Antártida (GANT) de la Dirección de Geología Regional del Ingemm ...",
                    "image_url": null,
                    "action_url": null,
                    "children_pages": null,
                    "fake_type": null,
                    "disabled": null,
                    "score": 60.0,
                    "last_week_visits": 3
                },
                {
                    "id": "2984961",
                    "document_type": false,
                    "expired_campaign": false,
                    "publication": "30 de setiembre de 2022 -  4:00 p. m.",
                    "subject": null,
                    "name_with_parent": "Ingemmet capacita al IX Macro Región Policial - Arequipa sobre los peligros volcánicos del Misti",
                    "collections": [],
                    "url": "<a class=\"track-ga-click\" data-origin=\"result-feed-656238\" href=\"/institucion/ingemmet/noticias/656238-ingemmet-capacita-al-ix-macro-region-policial-arequipa-sobre-los-peligros-volcanicos-del-misti\">Ingemmet capacita al IX Macro Región Policial - Arequipa sobre los peligros volcánicos del Misti</a>",
                    "searchable_type": "Feed",
                    "official_document_type": null,
                    "page_kind": null,
                    "content_sub_title_card": "Instituto Geológico, Minero y Metalúrgico",
                    "content": "Con el objetivo de fortalecer el conocimiento geocientífico en la sociedad, el Instituto Geológico, Minero y Metalúrgico (Ingemmet) brindó charlas sobre los peligros  ...",
                    "image_url": null,
                    "action_url": null,
                    "children_pages": null,
                    "fake_type": null,
                    "disabled": null,
                    "score": 60.0,
                    "last_week_visits": 6
                },
                {
                    "id": "2984918",
                    "document_type": false,
                    "expired_campaign": false,
                    "publication": "30 de setiembre de 2022 -  3:40 p. m.",
                    "subject": null,
                    "name_with_parent": "Ingemmet participa en pasacalle de Arequipa por el Día Mundial del Turismo",
                    "collections": [],
                    "url": "<a class=\"track-ga-click\" data-origin=\"result-feed-656226\" href=\"/institucion/ingemmet/noticias/656226-ingemmet-participa-en-pasacalle-de-arequipa-por-el-dia-mundial-del-turismo\">Ingemmet participa en pasacalle de Arequipa por el Día Mundial del Turismo</a>",
                    "searchable_type": "Feed",
                    "official_document_type": null,
                    "page_kind": null,
                    "content_sub_title_card": "Instituto Geológico, Minero y Metalúrgico",
                    "content": "El Instituto Geológico, Minero y Metalúrgico (Ingemmet) participó en el pasacalle regional por el Día Mundial del Turismo, organizado por el Gobierno Regional de Areq ...",
                    "image_url": null,
                    "action_url": null,
                    "children_pages": null,
                    "fake_type": null,
                    "disabled": null,
                    "score": 60.0,
                    "last_week_visits": 4
                },
                {
                    "id": "2981622",
                    "document_type": false,
                    "expired_campaign": false,
                    "publication": "30 de setiembre de 2022 -  8:00 a. m.",
                    "subject": null,
                    "name_with_parent": "Ingemmet en taller del ASGMI: El 77% del territorio peruano cuenta con un muestreo de suelos a escala global",
                    "collections": [],
                    "url": "<a class=\"track-ga-click\" data-origin=\"result-feed-655936\" href=\"/institucion/ingemmet/noticias/655936-ingemmet-en-taller-del-asgmi-el-77-del-territorio-peruano-cuenta-con-un-muestreo-de-suelos-a-escala-global\">Ingemmet en taller del ASGMI: El 77% del territorio peruano cuenta con un muestreo de suelos a escala global</a>",
                    "searchable_type": "Feed",
                    "official_document_type": null,
                    "page_kind": null,
                    "content_sub_title_card": "Instituto Geológico, Minero y Metalúrgico",
                    "content": "El Instituto Geológico, Minero y Metalúrgico (Ingemmet) participó en el taller “Información Geoquímica para la Sociedad”, organizado por el Servicio Geológico Colombi ...",
                    "image_url": null,
                    "action_url": null,
                    "children_pages": null,
                    "fake_type": null,
                    "disabled": null,
                    "score": 60.0,
                    "last_week_visits": 1
                },
                {
                    "id": "2977298",
                    "document_type": false,
                    "expired_campaign": false,
                    "publication": "28 de setiembre de 2022 -  4:25 p. m.",
                    "subject": null,
                    "name_with_parent": "Ingemmet capacita a la Cruz Roja Peruana sobre los peligros volcánicos en el sur del Perú",
                    "collections": [],
                    "url": "<a class=\"track-ga-click\" data-origin=\"result-feed-655081\" href=\"/institucion/ingemmet/noticias/655081-ingemmet-capacita-a-la-cruz-roja-peruana-sobre-los-peligros-volcanicos-en-el-sur-del-peru\">Ingemmet capacita a la Cruz Roja Peruana sobre los peligros volcánicos en el sur del Perú</a>",
                    "searchable_type": "Feed",
                    "official_document_type": null,
                    "page_kind": null,
                    "content_sub_title_card": "Instituto Geológico, Minero y Metalúrgico",
                    "content": "Con el objetivo de reducir el riesgo de desastres en el Perú, el Instituto Geológico, Minero y Metalúrgico (Ingemmet) fortaleció los conocimientos del personal de la  ...",
                    "image_url": null,
                    "action_url": null,
                    "children_pages": null,
                    "fake_type": null,
                    "disabled": null,
                    "score": 60.0,
                    "last_week_visits": 2
                },
                {
                    "id": "2975944",
                    "document_type": false,
                    "expired_campaign": false,
                    "publication": "28 de setiembre de 2022 - 11:44 a. m.",
                    "subject": null,
                    "name_with_parent": "Ingemmet y el IRSM-CAS de la República Checa implementan sistema de monitoreo permanente en el deslizamiento activo de Cuyo Chico, Cusco",
                    "collections": [],
                    "url": "<a class=\"track-ga-click\" data-origin=\"result-feed-654972\" href=\"/institucion/ingemmet/noticias/654972-ingemmet-y-el-irsm-cas-de-la-republica-checa-implementan-sistema-de-monitoreo-permanente-en-el-deslizamiento-activo-de-cuyo-chico-cusco\">Ingemmet y el IRSM-CAS de la República Checa implementan sistema de monitoreo permanente en el deslizamiento activo de Cuyo Chico, Cusco</a>",
                    "searchable_type": "Feed",
                    "official_document_type": null,
                    "page_kind": null,
                    "content_sub_title_card": "Instituto Geológico, Minero y Metalúrgico",
                    "content": "El Instituto Geológico, Minero y Metalúrgico (Ingemmet) y el Instituto de Estructuras y Mecánica de Roca de la Academia de Ciencia de la República Checa (IRSM-CAS) vi ...",
                    "image_url": null,
                    "action_url": null,
                    "children_pages": null,
                    "fake_type": null,
                    "disabled": null,
                    "score": 60.0,
                    "last_week_visits": 6
                },
                {
                    "id": "2935390",
                    "document_type": false,
                    "expired_campaign": false,
                    "publication": "21 de setiembre de 2022 - 10:41 a. m.",
                    "subject": null,
                    "name_with_parent": "Ciclo de Conferencias: Ingemmet y su aporte a la geología nacional",
                    "collections": [],
                    "url": "<a class=\"track-ga-click\" data-origin=\"result-feed-652807\" href=\"/institucion/ingemmet/noticias/652807-ciclo-de-conferencias-ingemmet-y-su-aporte-a-la-geologia-nacional\">Ciclo de Conferencias: Ingemmet y su aporte a la geología nacional</a>",
                    "searchable_type": "Feed",
                    "official_document_type": null,
                    "page_kind": null,
                    "content_sub_title_card": "Instituto Geológico, Minero y Metalúrgico",
                    "content": "El Instituto Geológico, Minero y Metalúrgico (Ingemmet) realizó el Ciclo de Conferencias Virtual: Ingemmet y su aporte a la geología nacional, el cual contó con la pa ...",
                    "image_url": null,
                    "action_url": null,
                    "children_pages": null,
                    "fake_type": null,
                    "disabled": null,
                    "score": 60.0,
                    "last_week_visits": 1
                },
                {
                    "id": "2930612",
                    "document_type": false,
                    "expired_campaign": false,
                    "publication": "19 de setiembre de 2022 -  5:29 p. m.",
                    "subject": null,
                    "name_with_parent": "Día de la Geología Nacional: Pariente extinto del gran tiburón blanco de hace 9 millones de años aprox. es presentado por el Ingemmet",
                    "collections": [],
                    "url": "<a class=\"track-ga-click\" data-origin=\"result-feed-652241\" href=\"/institucion/ingemmet/noticias/652241-dia-de-la-geologia-nacional-pariente-extinto-del-gran-tiburon-blanco-de-hace-9-millones-de-anos-aprox-es-presentado-por-el-ingemmet\">Día de la Geología Nacional: Pariente extinto del gran tiburón blanco de hace 9 millones de años aprox. es presentado por el Ingemmet</a>",
                    "searchable_type": "Feed",
                    "official_document_type": null,
                    "page_kind": null,
                    "content_sub_title_card": "Instituto Geológico, Minero y Metalúrgico",
                    "content": "En conmemoración por el Día de la Geología Nacional, el Instituto Geológico, Minero y Metalúrgico (Ingemmet), presentó el “Fósil del Mes” de septiembre, que se llevó  ...",
                    "image_url": null,
                    "action_url": null,
                    "children_pages": null,
                    "fake_type": null,
                    "disabled": null,
                    "score": 60.0,
                    "last_week_visits": 2
                },
                {
                    "id": "2923959",
                    "document_type": false,
                    "expired_campaign": false,
                    "publication": "16 de setiembre de 2022 -  8:44 a. m.",
                    "subject": null,
                    "name_with_parent": "Ingemmet: Existen 47 005 derechos mineros vigentes a nivel nacional",
                    "collections": [],
                    "url": "<a class=\"track-ga-click\" data-origin=\"result-feed-651381\" href=\"/institucion/ingemmet/noticias/651381-ingemmet-existen-47-005-derechos-mineros-vigentes-a-nivel-nacional\">Ingemmet: Existen 47 005 derechos mineros vigentes a nivel nacional</a>",
                    "searchable_type": "Feed",
                    "official_document_type": null,
                    "page_kind": null,
                    "content_sub_title_card": "Instituto Geológico, Minero y Metalúrgico",
                    "content": "El Instituto Geológico, Minero y Metalúrgico (Ingemmet) informó que se existen 47 005 derechos mineros vigentes a nivel nacional hasta el 31 de agosto de 2022, que co ...",
                    "image_url": null,
                    "action_url": null,
                    "children_pages": null,
                    "fake_type": null,
                    "disabled": null,
                    "score": 60.0,
                    "last_week_visits": 1
                },
                {
                    "id": "2895708",
                    "document_type": false,
                    "expired_campaign": false,
                    "publication": " 7 de setiembre de 2022 -  2:32 p. m.",
                    "subject": null,
                    "name_with_parent": "Apurímac es la tercera región con mayor producción de Cobre y Molibdeno a nivel nacional",
                    "collections": [],
                    "url": "<a class=\"track-ga-click\" data-origin=\"result-feed-647812\" href=\"/institucion/ingemmet/noticias/647812-apurimac-es-la-tercera-region-con-mayor-produccion-de-cobre-y-molibdeno-a-nivel-nacional\">Apurímac es la tercera región con mayor producción de Cobre y Molibdeno a nivel nacional</a>",
                    "searchable_type": "Feed",
                    "official_document_type": null,
                    "page_kind": null,
                    "content_sub_title_card": "Instituto Geológico, Minero y Metalúrgico",
                    "content": "El Gobierno Regional de Apurímac, hasta julio de 2022, ha recibido más S/16.5 millones y sus gobiernos locales más de S/88.3 millones por concepto de regalías contrac ...",
                    "image_url": null,
                    "action_url": null,
                    "children_pages": null,
                    "fake_type": null,
                    "disabled": null,
                    "score": 60.0,
                    "last_week_visits": 1
                },
                {
                    "id": "2894449",
                    "document_type": false,
                    "expired_campaign": false,
                    "publication": " 7 de setiembre de 2022 - 10:49 a. m.",
                    "subject": null,
                    "name_with_parent": "Ingemmet participó en el Ciclo de Conferencias por el 61 aniversario de la Universidad Católica Santa María de Arequipa",
                    "collections": [],
                    "url": "<a class=\"track-ga-click\" data-origin=\"result-feed-647686\" href=\"/institucion/ingemmet/noticias/647686-ingemmet-participo-en-el-ciclo-de-conferencias-por-el-61-aniversario-de-la-universidad-catolica-santa-maria-de-arequipa\">Ingemmet participó en el Ciclo de Conferencias por el 61 aniversario de la Universidad Católica Santa María de Arequipa</a>",
                    "searchable_type": "Feed",
                    "official_document_type": null,
                    "page_kind": null,
                    "content_sub_title_card": "Instituto Geológico, Minero y Metalúrgico",
                    "content": "Con el objetivo de fortalecer el aprendizaje y desarrollo académico de los universitarios del Perú, el Instituto Geológico, Minero y Metalúrgico (Ingemmet), a través  ...",
                    "image_url": null,
                    "action_url": null,
                    "children_pages": null,
                    "fake_type": null,
                    "disabled": null,
                    "score": 60.0,
                    "last_week_visits": 1
                },
                {
                    "id": "2884424",
                    "document_type": false,
                    "expired_campaign": false,
                    "publication": " 5 de setiembre de 2022 -  3:21 p. m.",
                    "subject": null,
                    "name_with_parent": "Cusco recibió más de S/23 000 millones en los últimos diez años, gracias a las actividades mineras y energéticas",
                    "collections": [],
                    "url": "<a class=\"track-ga-click\" data-origin=\"result-feed-647200\" href=\"/institucion/ingemmet/noticias/647200-cusco-recibio-mas-de-s-23-000-millones-en-los-ultimos-diez-anos-gracias-a-las-actividades-mineras-y-energeticas\">Cusco recibió más de S/23 000 millones en los últimos diez años, gracias a las actividades mineras y energéticas</a>",
                    "searchable_type": "Feed",
                    "official_document_type": null,
                    "page_kind": null,
                    "content_sub_title_card": "Instituto Geológico, Minero y Metalúrgico",
                    "content": "A nivel nacional, Cusco es la región que ha percibido la mayor cantidad de transferencias económicas por actividades mineras y energéticas, en el periodo del 2012 a j ...",
                    "image_url": null,
                    "action_url": null,
                    "children_pages": null,
                    "fake_type": null,
                    "disabled": null,
                    "score": 60.0,
                    "last_week_visits": 5
                },
                {
                    "id": "2857642",
                    "document_type": false,
                    "expired_campaign": false,
                    "publication": "25 de agosto de 2022 -  4:13 p. m.",
                    "subject": null,
                    "name_with_parent": "Ingemmet capacita al COER y al Gobierno Regional de Cajamarca para fortalecer operaciones de búsqueda y rescate en la Gestión del Riesgos de",
                    "collections": [],
                    "url": "<a class=\"track-ga-click\" data-origin=\"result-feed-644562\" href=\"/institucion/ingemmet/noticias/644562-ingemmet-capacita-al-coer-y-al-gobierno-regional-de-cajamarca-para-fortalecer-operaciones-de-busqueda-y-rescate-en-la-gestion-del-riesgos-de\">Ingemmet capacita al COER y al Gobierno Regional de Cajamarca para fortalecer operaciones de búsqueda y rescate en la Gestión del Riesgos de</a>",
                    "searchable_type": "Feed",
                    "official_document_type": null,
                    "page_kind": null,
                    "content_sub_title_card": "Instituto Geológico, Minero y Metalúrgico",
                    "content": "El Instituto Geológico, Minero y Metalúrgico (Ingemmet), a través de su Órgano Desconcentrado de Cajamarca, desarrolló un taller teórico-práctico en fotogrametría con ...",
                    "image_url": null,
                    "action_url": null,
                    "children_pages": null,
                    "fake_type": null,
                    "disabled": null,
                    "score": 60.0,
                    "last_week_visits": 2
                },
                {
                    "id": "2845897",
                    "document_type": false,
                    "expired_campaign": false,
                    "publication": "23 de agosto de 2022 - 10:40 a. m.",
                    "subject": null,
                    "name_with_parent": "Laboratorio de Química del Ingemmet logra el mejor resultado en el ensayo de aptitud de oro realizado por reconocido ente chileno",
                    "collections": [],
                    "url": "<a class=\"track-ga-click\" data-origin=\"result-feed-643341\" href=\"/institucion/ingemmet/noticias/643341-laboratorio-de-quimica-del-ingemmet-logra-el-mejor-resultado-en-el-ensayo-de-aptitud-de-oro-realizado-por-reconocido-ente-chileno\">Laboratorio de Química del Ingemmet logra el mejor resultado en el ensayo de aptitud de oro realizado por reconocido ente chileno</a>",
                    "searchable_type": "Feed",
                    "official_document_type": null,
                    "page_kind": null,
                    "content_sub_title_card": "Instituto Geológico, Minero y Metalúrgico",
                    "content": "El Laboratorio de Química del Instituto Geológico, Minero y Metalúrgico (Ingemmet) obtuvo el mejor resultado (Z score = 0.2) en el ensayo de aptitud de oro en muestra ...",
                    "image_url": null,
                    "action_url": null,
                    "children_pages": null,
                    "fake_type": null,
                    "disabled": null,
                    "score": 60.0,
                    "last_week_visits": 1
                },
                {
                    "id": "2842546",
                    "document_type": false,
                    "expired_campaign": false,
                    "publication": "22 de agosto de 2022 - 11:08 a. m.",
                    "subject": null,
                    "name_with_parent": "Ceniza volcánica recientemente emitida por erupción del volcán Sabancaya es monitoreada por el Ingemmet",
                    "collections": [],
                    "url": "<a class=\"track-ga-click\" data-origin=\"result-feed-643199\" href=\"/institucion/ingemmet/noticias/643199-ceniza-volcanica-recientemente-emitida-por-erupcion-del-volcan-sabancaya-es-monitoreada-por-el-ingemmet\">Ceniza volcánica recientemente emitida por erupción del volcán Sabancaya es monitoreada por el Ingemmet</a>",
                    "searchable_type": "Feed",
                    "official_document_type": null,
                    "page_kind": null,
                    "content_sub_title_card": "Instituto Geológico, Minero y Metalúrgico",
                    "content": "El Instituto Geológico, Minero y Metalúrgico (Ingemmet), a través de su Observatorio Vulcanológico y como parte de sus actividades de monitoreo de peligros geológicos ...",
                    "image_url": null,
                    "action_url": null,
                    "children_pages": null,
                    "fake_type": null,
                    "disabled": null,
                    "score": 60.0,
                    "last_week_visits": 2
                },
                {
                    "id": "2845727",
                    "document_type": false,
                    "expired_campaign": false,
                    "publication": "19 de agosto de 2022 -  4:46 p. m.",
                    "subject": null,
                    "name_with_parent": "Ingemmet: Cajamarca es el segundo productor de oro a nivel nacional",
                    "collections": [],
                    "url": "<a class=\"track-ga-click\" data-origin=\"result-feed-642754\" href=\"/institucion/ingemmet/noticias/642754-ingemmet-cajamarca-es-el-segundo-productor-de-oro-a-nivel-nacional\">Ingemmet: Cajamarca es el segundo productor de oro a nivel nacional</a>",
                    "searchable_type": "Feed",
                    "official_document_type": null,
                    "page_kind": null,
                    "content_sub_title_card": "Instituto Geológico, Minero y Metalúrgico",
                    "content": "El Instituto Geológico, Minero y Metalúrgico (Ingemmet), a través de su Órgano Desconcentrado (OD) de Cajamarca, y en conmemoración de sus 43 años y sus 170 años de h ...",
                    "image_url": null,
                    "action_url": null,
                    "children_pages": null,
                    "fake_type": null,
                    "disabled": null,
                    "score": 60.0,
                    "last_week_visits": 3
                },
                {
                    "id": "2840577",
                    "document_type": false,
                    "expired_campaign": false,
                    "publication": "19 de agosto de 2022 - 12:43 p. m.",
                    "subject": null,
                    "name_with_parent": "Ingemmet: Universitarios de Latinoamérica visitan los principales geositios de la ciudad de Arequipa",
                    "collections": [],
                    "url": "<a class=\"track-ga-click\" data-origin=\"result-feed-642663\" href=\"/institucion/ingemmet/noticias/642663-ingemmet-universitarios-de-latinoamerica-visitan-los-principales-geositios-de-la-ciudad-de-arequipa\">Ingemmet: Universitarios de Latinoamérica visitan los principales geositios de la ciudad de Arequipa</a>",
                    "searchable_type": "Feed",
                    "official_document_type": null,
                    "page_kind": null,
                    "content_sub_title_card": "Instituto Geológico, Minero y Metalúrgico",
                    "content": "Con el objetivo de dar a conocer los atractivos geoturísticos que tiene la ciudad de Arequipa por su valor histórico, geológico y la belleza propia que posee el lugar ...",
                    "image_url": null,
                    "action_url": null,
                    "children_pages": null,
                    "fake_type": null,
                    "disabled": null,
                    "score": 60.0,
                    "last_week_visits": 1
                },
                {
                    "id": "2845759",
                    "document_type": false,
                    "expired_campaign": false,
                    "publication": "19 de agosto de 2022 - 10:34 a. m.",
                    "subject": null,
                    "name_with_parent": "Ingemmet capacitó a estudiantes de la UNSAAC sobre el desarrollo sostenible de la actividad minera y la prevención de riesgos de desastres",
                    "collections": [],
                    "url": "<a class=\"track-ga-click\" data-origin=\"result-feed-642564\" href=\"/institucion/ingemmet/noticias/642564-ingemmet-capacito-a-estudiantes-de-la-unsaac-sobre-el-desarrollo-sostenible-de-la-actividad-minera-y-la-prevencion-de-riesgos-de-desastres\">Ingemmet capacitó a estudiantes de la UNSAAC sobre el desarrollo sostenible de la actividad minera y la prevención de riesgos de desastres</a>",
                    "searchable_type": "Feed",
                    "official_document_type": null,
                    "page_kind": null,
                    "content_sub_title_card": "Instituto Geológico, Minero y Metalúrgico",
                    "content": "El Instituto Geológico Minero y Metalúrgico, a través del Órgano Desconcentrado (OD) de Cusco, y en conmemoración por sus 43 años y sus 170 años de historia, llevó a  ...",
                    "image_url": null,
                    "action_url": null,
                    "children_pages": null,
                    "fake_type": null,
                    "disabled": null,
                    "score": 60.0,
                    "last_week_visits": 2
                },
                {
                    "id": "2845782",
                    "document_type": false,
                    "expired_campaign": false,
                    "publication": "18 de agosto de 2022 -  7:33 p. m.",
                    "subject": null,
                    "name_with_parent": "Ingemmet suscribe convenio con el Colegio de Ingenieros del Perú para promover y difundir el conocimiento geológico en favor del país",
                    "collections": [],
                    "url": "<a class=\"track-ga-click\" data-origin=\"result-feed-642409\" href=\"/institucion/ingemmet/noticias/642409-ingemmet-suscribe-convenio-con-el-colegio-de-ingenieros-del-peru-para-promover-y-difundir-el-conocimiento-geologico-en-favor-del-pais\">Ingemmet suscribe convenio con el Colegio de Ingenieros del Perú para promover y difundir el conocimiento geológico en favor del país</a>",
                    "searchable_type": "Feed",
                    "official_document_type": null,
                    "page_kind": null,
                    "content_sub_title_card": "Instituto Geológico, Minero y Metalúrgico",
                    "content": "El Instituto  Geológico, Minero y Metalúrgico (Ingemmet) firmó un Convenio Marco de Cooperación Interinstitucional con el Colegio de Ingenieros del Perú-Consejo Depar ...",
                    "image_url": null,
                    "action_url": null,
                    "children_pages": null,
                    "fake_type": null,
                    "disabled": null,
                    "score": 60.0,
                    "last_week_visits": 1
                },
                {
                    "id": "2831875",
                    "document_type": false,
                    "expired_campaign": false,
                    "publication": "17 de agosto de 2022 -  5:12 p. m.",
                    "subject": null,
                    "name_with_parent": "Minem: El Ingemmet es un aliado importante para la exploración del litio y de nuevos recursos minerales y energéticos en el Perú",
                    "collections": [],
                    "url": "<a class=\"track-ga-click\" data-origin=\"result-feed-641899\" href=\"/institucion/ingemmet/noticias/641899-minem-el-ingemmet-es-un-aliado-importante-para-la-exploracion-del-litio-y-de-nuevos-recursos-minerales-y-energeticos-en-el-peru\">Minem: El Ingemmet es un aliado importante para la exploración del litio y de nuevos recursos minerales y energéticos en el Perú</a>",
                    "searchable_type": "Feed",
                    "official_document_type": null,
                    "page_kind": null,
                    "content_sub_title_card": "Instituto Geológico, Minero y Metalúrgico",
                    "content": "La titular del Ministerio de Energía y Minas (Minem), Alessandra Herrera Jara, destacó, durante la ceremonia por los 43 años y los 170 años de historia del Instituto  ...",
                    "image_url": null,
                    "action_url": null,
                    "children_pages": null,
                    "fake_type": null,
                    "disabled": null,
                    "score": 60.0,
                    "last_week_visits": 8
                }
            ]
        }
    }
  }

  constructor(private _intranetService:IntranetService) {}

  ngOnInit(): void {
    this.noticiasList = this.noticiaAll.data.attributes.results;
    this.noticiasList.forEach(element => {
        element.url= element.url.replaceAll('href="/','href="https://www.gob.pe/');
    });

    for (var i = 0; i < 3; i++) {
      this.noticias.push(this.noticiasList[i]);
    } 
  }
}
