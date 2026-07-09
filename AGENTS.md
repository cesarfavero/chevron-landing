<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Chevron Landing — regras operacionais

## Deploy automático (obrigatório)

Sempre que finalizar uma tarefa com mudanças de código, assets ou config:

1. **Commit** com mensagem clara (pt-BR ou en, foco no *porquê*).
2. **Push** para `origin` na branch atual (`master` / default).
3. **Não perguntar** se deve commitar/pushar — é o fluxo padrão deste repo.

Motivo: o projeto está na **Vercel** com GitHub conectado. O push em `master` dispara o deploy de produção em:

- Site: https://chevron-landing.vercel.app  
- Repo: https://github.com/cesarfavero/chevron-landing  

### Como fazer

```bash
git add -A
git status
git commit -m "$(cat <<'EOF'
mensagem do commit

EOF
)"
git push origin HEAD
```

- Só pular commit/push se **não houver mudanças** ou se o usuário pedir explicitamente para *não* publicar.
- Não usar `git commit --amend`, force-push, nem alterar git config sem pedido explícito.
- Não commitar secrets (`.env*`, tokens). `.env.local` e `.vercel/` já estão no `.gitignore`.

## Idioma

Responder em **pt-BR** quando o usuário falar em português.

## Escopo

Manter o trabalho dentro deste repositório (landing page do Chevron).
