import { redirect } from '@sveltejs/kit';

export const load: any = async (event: any) => {
  const session = await event.locals.auth();
  if (!session?.user) throw redirect(303, '/auth');
  return {};
};