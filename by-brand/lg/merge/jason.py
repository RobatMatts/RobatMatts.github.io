import csv
import json

# Open the CSV file for reading
with open('merged_data.csv', 'r') as csv_file:
    csv_reader = csv.DictReader(csv_file)

    # Convert CSV to JSON
    data = [row for row in csv_reader]

# Save the JSON data to a file
with open('products.json', 'w', encoding='utf-8') as json_file:
    json.dump(data, json_file, ensure_ascii=False, indent=4)
