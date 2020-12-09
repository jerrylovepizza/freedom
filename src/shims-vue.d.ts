declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module 'vuetify/lib' {
  import 'vuetify/types/lib'
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}