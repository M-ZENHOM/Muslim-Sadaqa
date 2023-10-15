"use server";
import { cookies } from "next/headers";

export async function setLangCookie(lang: string) {
    cookies().set("lang", lang);
}