import socials from '../../data/socials.json';

export const getSocialData = (): Response => {
    return new Response(JSON.stringify(socials), {
        headers: { 'Content-Type': 'application/json' },
    });
}