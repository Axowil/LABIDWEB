import requests
def obtener_pokemons():
    url = "https://pokeapi.co/api/v2/pokemon?limit=10"
    r = requests.get(url)
    if (r.status_code != 200): return
    data = r.json()
    for pokemon in data["results"]:
        print(pokemon["name"])

obtener_pokemons()