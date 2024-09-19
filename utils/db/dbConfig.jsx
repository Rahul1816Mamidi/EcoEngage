import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon("postgresql://EcoEngage_owner:sm6fwAXNQ1lC@ep-odd-lake-a12y28va.ap-southeast-1.aws.neon.tech/EcoEngage?sslmode=require");
export const db = drizzle(sql, { schema });