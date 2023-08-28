import requests
import re

# URLs
source_url = "https://biotechresearchreport.com/disclaimer/"
webhook_url = "https://discord.com/api/webhooks/1144016412185202738/f7txAsKyss6Gcqkjf4GpPx6-8TajNALmUM0IZ3Wk8pvqiVFGBR0V0ENdhK_7DIeupuOh"

# Fetch current content
response = requests.get(source_url)
new_content = response.text

# Extract paragraphs starting with "Pursuant"
paragraphs = re.findall(r'Pursuant.*?(?=<)', new_content, re.DOTALL)

# Combine the paragraphs into a single string
new_text_message = '\n'.join(paragraphs)

# Load previous content
try:
    with open("previous_content.txt", "r") as f:
        previous_content = f.read()
except FileNotFoundError:
    previous_content = ""

# Find the new content by comparing with previous content
if new_text_message != previous_content:
    # Find the difference between new and previous content
    new_content_to_send = new_text_message.replace(previous_content, '').strip()

    if new_content_to_send:
        # Send message to Discord webhook
        data = {"content": "@everyone\n" + new_content_to_send}
        response = requests.post(webhook_url, json=data)

        if response.status_code == 204:
            print("New text update sent to Discord.")
        else:
            print("Failed to send new text update to Discord. Status code:", response.status_code)

        # Update the previous_content.txt file with new content
        with open("previous_content.txt", "w") as f:
            f.write(new_text_message)

        # Save the new content to debug.txt for troubleshooting
        with open("debug.txt", "w", encoding="utf-8") as debug_file:
            debug_file.write(new_content_to_send)
    else:
        print("No new text to send.")
else:
    print("No new text to send.")