const TOKEN = import.meta.env.GITHUB_GIST_TOKEN;

export async function getData(gist_id: string, gist_filename: string) {
  const req = await fetch(`https://api.github.com/gists/${gist_id}`);
  const gist = await req.json();
  return JSON.parse(gist.files[gist_filename].content);
}

export async function setData(gist_id: string, gist_filename: string, data: JSON) {
  const req = await fetch(`https://api.github.com/gists/${gist_id}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      files: {
        [gist_filename]: {
          content: JSON.stringify(data),
        },
      },
    }),
  });

  return req.json();
}

export async function appendData(gist_id: string, gist_filename: string, data: JSON) {
    const currentContent = await getData(gist_id, gist_filename);
  
    return setData(gist_id, gist_filename, {...currentContent, data});
}