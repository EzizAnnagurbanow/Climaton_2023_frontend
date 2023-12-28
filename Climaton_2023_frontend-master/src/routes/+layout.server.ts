/** @type {import('./$types').PageServerLoad} */
import type { Member } from '@prisma/client';
import { error } from '@sveltejs/kit';

export async function load({ url, fetch, locals }) {
    const user: Member = locals.user
    return { user }
}