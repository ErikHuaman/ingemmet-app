export namespace C {
  export namespace STORAGE {
    export const _ID = '_id';
    export const TOKEN_KEY = 'token';
    export const USERS = 'users';
    export const CORREO = 'correo';
    export const _ID_SISTEMA = '_sistemas';
  }

  export namespace IMGDEFAUL{
    export const imgProductoInicio = 'assets/img/default.jpg'
  }

  export namespace   URL_PROYECTO_BACKEND {
    export const url = 'http://localhost:4201/api/';
    export const urlSocket = 'http://localhost:4201';
  }
 
  export namespace REGEX {
    export const SHORT_DATE: RegExp =
      /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/\d{4}$/; // 20/12/2017
    export const LETTERS_NUMBERS: RegExp = /^[a-zA-Z0-9]*$/; // aA 1
    export const LETTERS_NUMBERS_MAX_200: RegExp = /^[a-zA-Z0-9]*$/; // aA 1
    export const DOCUMENTO_TIPO: RegExp = /^[0-9]{8}$/; // 0 a 9
    export const LETTERS_NUMBERS_SPACE: RegExp = /^[a-zA-Z0-9 ]*$/; // aA 1
    export const RUC_REGEX: RegExp = /^[0-9]{11}$/;
    export const CELULAR_REGEX: RegExp = /^[0-9]{9}$/;
    export const TELEFONO_REGEX: RegExp = /^[0-9]{7}$/;
    export const CODIGO_REGEX: RegExp = /^[a-zA-Z0-9]+$/;
    export const PATTERN_EMAIL: RegExp =
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
    export const PATTERN_CUENTA_BANCARIA: RegExp = /^[0-9]{18}$/;
    export const PATTERN_CCI: RegExp = /^[0-9]{20}$/;
    export const PATTERN_DECIMAL: RegExp =
      /^([0-9]?[0-9](\.[0-9][0-9]?)?)|([0-9]?[0-9]?(\.[0-9][0-9]?))$"/;
    export const SPACES: RegExp = /\s/g;
  }

  export namespace FORMATO_FECHA {
    export const DIA_SIN_CERO: string = 'd';
    export const MES_SIN_CERO: string = 'M';
    export const ANIO: string = 'yyyy';
    export const FECHA: string = 'dd/MM/yyyy';
    export const FECHA_HORA: string = 'dd/MM/yyyy hh:mm aa';
    export const WEB: string = 'DD/MM/YYYY';
    export const SQL: string = 'yyyy-MM-dd';
    export const BACK: string = 'yyyy/MM/dd';
  }

  // International Components for Unicode (ICU)
  export namespace ICU_LOCAL {
    export const ES_PE = 'es-PE';
    export const EN_US = 'en-US';
  }

  export namespace ESTADO_BOOLEANO {
    export const ACTIVO = true;
    export const INACTIVO = false;
  }

  export namespace ESTADO_NUMERICO {
    export const ACTIVO = 1;
    export const INACTIVO = 0;
  }
  export namespace COLORES_MODULOS {
    export const PRIMARY = '#00a0b4';
    export const SECONDARY = '#ffa627';

    export const VALORES: any[] = [
      {
        color: '#00B4D4',
      },
      {
        color: '#61c70c',
      },
      {
        color: '#FFA627',
      },
    ];
  }

}
