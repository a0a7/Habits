export const load: any = async (event: any) => {
  const session = await event.locals.auth()
 
  return {
    session,
  }
}