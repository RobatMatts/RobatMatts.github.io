import json

# Load the productsbig.json file
with open('productsbig.json', 'r') as json_file:
    data = json.load(json_file)

# Initialize lists for different categories
accessories = []
misc = []
remaining_data = []

# Filter and split data based on category
for item in data:
    category = item.get("Category")
    if category == "ACCESSORIES":
        accessories.append(item)
    elif category == "MISC":
        misc.append(item)
    else:
        remaining_data.append(item)

# Write data to separate JSON files
with open('Accessories.json', 'w') as accessories_file:
    json.dump(accessories, accessories_file, indent=4)

with open('Misc.json', 'w') as misc_file:
    json.dump(misc, misc_file, indent=4)

# Update the main JSON file with remaining data
with open('productsbig.json', 'w') as main_file:
    json.dump(remaining_data, main_file, indent=4)

print("Data has been filtered and split into Accessories.json and Misc.json.")
print("Items have been removed from the main productsbig.json file.")
