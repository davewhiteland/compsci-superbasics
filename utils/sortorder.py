# open _config.yml

# GitHub pages doesn't support the convenient order: mechanism
# for collections because that is Jekyll v4
# This adds a manual sort order to the individual files as a
# workaround for v3

# get the collections

# run through the markdown files
# adding sortorder: n to them


import yaml  # try: "pip install pyyaml"

COLLECTIONS_DIR = 'collections'
CONFIG_FILENAME = '_config.yml'
FRONTMATTER_MARKER = "---\n"
SORTORDER_NAME = 'order'

with open(CONFIG_FILENAME) as file:

  config = yaml.load(file, Loader=yaml.FullLoader)

  print(f"[ ] read {CONFIG_FILENAME} OK")
  print( "[ ] will run through topics in presentation order:")
  
  collections = config.get("collections")
  # note: includes 'topics' (the meta-topic)
  
  for topic_fname in collections:
    topic_name = topic_fname.replace(".md", "")
    topic_data = collections.get(topic_name)
    if topic_data is None:
      print(f"[ ]   topic: {topic_name} has no entries")
    else:
      entries_in_order = topic_data.get("order")
      topic_dirname = "_" + topic_name
      print(f"[ ]   topic: {topic_name} has {len(entries_in_order)} entries")
      i = 100
      for fname in entries_in_order:
        i += 1
        full_fname = COLLECTIONS_DIR + "/" + topic_dirname + "/" + fname
        print(f"[>]       {i} {fname}")
        file_content = []
        with open(full_fname, 'r') as reader:
          for line in reader:
            if not line.startswith(SORTORDER_NAME + ":"):
              file_content.append(line)
          # print(f"[ ]          read {len(file_content)} lines")
          if len(file_content) < 2:
            print("[!] unexpected: file too short")
            quit()
          try:
            if file_content.index(FRONTMATTER_MARKER) != 0:
              print("[!] unexpected: want front-matter marker on first line")
              quit()
            fm_line_no = file_content[1:].index(FRONTMATTER_MARKER)
            # lazy way of insert sort order before fm_line_no:
            file_content[fm_line_no] += f"{SORTORDER_NAME}: {i}\n"
          except ValueError as e:
            print("[!] missing front matter markers in file, fix this manually")
            quit()
          reader.close()
          with open(full_fname, 'w') as writer:
            for line in file_content:
               writer.write(line)



            
            