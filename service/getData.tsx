import config from "@/utils/hosts"

export async function getData() {
    const res = await fetch(`${config.apiKey}products/1`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })

    if (res.ok) {
        return res.json()
    }

    else if (!res.ok) {
        console.log('Failed to fetch data')
    }
}