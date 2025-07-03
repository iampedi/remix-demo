// app/lib/builder.ts
import { builder } from "@builder.io/sdk";

if (!builder.apiKey) {
  builder.init("696d3067215f4f379ce02d1c098f45ba");
}

export default builder;
