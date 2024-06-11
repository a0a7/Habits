<script lang="ts">
    import { signIn, signOut } from "@auth/sveltekit/client"
    import { page } from "$app/stores"
    
    import Button from "$lib/components/ui/button/button.svelte";
    import * as Avatar from "$lib/components/ui/avatar";
  </script>
   
<div class="flex flex-col items-center content-center justify-center font-mono h-screen">
    {#if $page.data.session}
        {#if $page.data.session.user?.image}
            <Avatar.Root>
                <Avatar.Image src={$page.data.session.user.image} class="avatar" alt="@User Avatar" />
            </Avatar.Root>
        {/if}
        <p class="py-2">Signed in as {$page.data.session.user?.name ?? "Unknown Username"}</p>
        <Button on:click={() => signOut()}>Sign out</Button>
    {:else}
        <p class="py-2">You are not signed in</p>
        <Button on:click={() => signIn("google")}>Sign in</Button>
    {/if}
</div>