with open('src/routes/index.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

old = 'export const Route = createFileRoute("/")(\n  component: Index,\n});\n'
new = 'export const Route = createFileRoute("/")({ component: Index });\n'
result = content.replace(old, new)
print("Replaced:", old in content)

with open('src/routes/index.tsx', 'w', encoding='utf-8', newline='') as f:
    f.write(result)
print("Done")
