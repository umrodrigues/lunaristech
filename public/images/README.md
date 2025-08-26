# Estrutura de Imagens

Esta pasta contém todas as imagens do site organizadas por categoria.

## Estrutura

### `/projects/` - Imagens dos Projetos
- `brplan.jpg` - Br Planejados
- `canoasgtshop.png` - Canoas Guitar Shop
- `ecenfermagem.png` - RC Enfermagem
- `econti-wedding.png` - Página de Casamento Econti
- `lhc.png` - Demolidora LHC
- `rcenf.jpg` - RC Enfermagem (alternativa)
- `vipleiloes.png` - Vip Leilões
- `whats.png` - Gerador de links WhatsApp

### `/branding/` - Imagens da Marca
- `logo-lunaris.png` - Logo da Lunaris Tech
- `favicon.ico` - Favicon do site

### `/backgrounds/` - Imagens de Fundo
- `space.jpg` - Imagem de fundo espacial

## Como usar

Atualize os imports nos componentes para usar os novos caminhos:

```typescript
// Antes
src="/whats.png"

// Depois
src="/images/projects/whats.png"
```
