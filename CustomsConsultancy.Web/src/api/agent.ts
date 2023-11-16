const baseUrl = 'https://localhost:7108/api'

export function http(url: string, body: any) {
    return fetch(`${baseUrl}${url}`, {
        body: JSON.stringify(body)
    })
        .then(response => response.json())
}