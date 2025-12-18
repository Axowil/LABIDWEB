import requests
res = requests.get("https://httpbin.org/get")
if (res.status_code == 200):
    data = res.json()
    print("Elementos del link")
    print("IP:",data["origin"])
    headers = list(data["headers"].keys())
    print("Headers: ",headers)
    print("Args:",data["args"])
else:
    print("Ocurrio un error al obtener el API") 