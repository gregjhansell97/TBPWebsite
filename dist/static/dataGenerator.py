import json

print("RUNNING DATA GENERATOR SCRIPT:")

def fileToList(fileName):
    l = []
    with open(fileName) as f:
        for line in f:
            l.append(line.strip())
    return l

data = {}
data["members"] = []
data["candidates"] = []
data["about"] = []
data["officers"] = []


#creates the member list from members.txt
data["members"] = fileToList("./members.txt")
data["members"].sort()

#creates the candidates list from candidates.txt
data["candidates"] = fileToList("./candidates.txt")
data["candidates"].sort()

#creates the about section, in a more javascript family format :)
data["about"] = fileToList("./about.txt")

with open("officers.json") as f:
    data["officers"] = json.load(f)

with open("data.json", "w") as f:
    json.dump(data, f, indent=4)

print("SCRIPT WORKED, HAPPY HACKING!")
