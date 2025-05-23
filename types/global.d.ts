// global.d.ts
declare global {
    // Extend the NodeJS Global type with a mongoose property.
    // Adjust the type as needed for your application.
    var mongoose: {
      conn: any;
      promise: Promise<any> | null;
    };
  }
  
  // This ensures the file is a module.
  export {};
  