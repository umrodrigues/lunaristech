# Google Tag Manager - Lunaris Tech

## Instalação

O GTM já está configurado no `layout.tsx` com o ID `AW-17510765186`.

## Como Usar

### 1. Funções Utilitárias

```typescript
import { trackContactClick, trackServiceClick, trackFormSubmit } from './gtm-utils';

// Rastrear clique no WhatsApp
trackContactClick('whatsapp', 'contato_principal');

// Rastrear clique em serviço
trackServiceClick('desenvolvimento_web', 'view_details');

// Rastrear envio de formulário
trackFormSubmit('contato_form', { nome: 'João', email: 'joao@email.com' });
```

### 2. Hook Personalizado

```typescript
import { useGTM } from './use-gtm';

const { trackClick, trackCTA, trackExternalLink } = useGTM();

// Rastrear clique
trackClick('whatsapp_button', 'contact', 'conversion');

// Rastrear CTA
trackCTA('Solicitar Orçamento', 'hero_section');

// Rastrear link externo
trackExternalLink('https://github.com', 'GitHub Link');
```

## Como Testar

### 1. DevTools Console

1. Abra o DevTools (F12)
2. Vá para a aba Console
3. Clique nos botões do componente de exemplo
4. Verifique se os eventos aparecem no console

### 2. Google Tag Manager Preview Mode

1. Acesse o Google Tag Manager
2. Clique em "Preview"
3. Digite a URL do seu site
4. Clique em "Start"
5. Navegue pelo site e veja os eventos sendo disparados

### 3. Google Analytics Real-Time

1. Acesse o Google Analytics
2. Vá para Relatórios em Tempo Real
3. Verifique se os eventos estão sendo registrados

### 4. Extensão Tag Assistant

1. Instale a extensão Tag Assistant Legacy
2. Ative o modo de depuração
3. Navegue pelo site e veja os eventos

## Eventos Disponíveis

- `page_view` - Visualização de página
- `click` - Cliques em elementos
- `scroll` - Scroll da página
- `form_submit` - Envio de formulários
- `contact_click` - Cliques em contato
- `service_click` - Cliques em serviços
- `conversion` - Conversões
- `cta_click` - Cliques em CTAs
- `external_link_click` - Cliques em links externos
- `download` - Downloads de arquivos
- `time_on_page` - Tempo na página

## Componente de Exemplo

Use o componente `GTMExample` para testar os eventos:

```typescript
import { GTMExample } from './gtm-example';

// No seu componente
<GTMExample />
```
