# Angular Clean Architecture Template

> 🏗️ Template profesional de Angular con Clean Architecture para proyectos escalables y mantenibles

[![Angular](https://img.shields.io/badge/Angular-21.1-DD0031?style=flat&logo=angular)](https://angular.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 📋 Contenido

- [¿Qué es esto?](#qué-es-esto)
- [Características](#características)
- [Inicio Rápido](#inicio-rápido)
- [Documentación](#documentación)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Tecnologías](#tecnologías)

## 🎯 ¿Qué es esto?

Este es un **template de Angular 21** que implementa **Clean Architecture** (Arquitectura Limpia) con las mejores prácticas de desarrollo front-end. Está diseñado para ser:

- ✅ **Escalable**: Estructura modular que crece con tu proyecto
- ✅ **Mantenible**: Código organizado y fácil de entender
- ✅ **Testeable**: Separación de responsabilidades que facilita el testing
- ✅ **Profesional**: Siguiendo estándares de la industria

## ✨ Características

- 🏛️ **Clean Architecture**: Separación clara de capas y responsabilidades
- 📦 **Componentes Standalone**: Sin NgModules, usando las últimas features de Angular
- 🚀 **Lazy Loading**: Carga diferida de módulos para optimizar rendimiento
- 🔒 **Guards & Interceptors**: Protección de rutas y manejo de HTTP
- 🎨 **Componentes Reutilizables**: Librería de componentes compartidos
- 📐 **TypeScript Estricto**: Tipado fuerte para mayor seguridad
- 🔄 **Signals**: Manejo de estado reactivo con Angular Signals
- 🗂️ **Path Aliases**: Imports limpios y organizados

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js (v18 o superior)
- npm (v10 o superior)

### Instalación

```bash
# Clonar el repositorio
git clone <url-del-repo>
cd angular-clean-architecture-template-web

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start
```

Abre tu navegador en `http://localhost:4200`

### Probar la Aplicación

El template incluye ejemplos de:
- 🔐 Login/Registro (features/auth)
- 📊 Dashboard (features/dashboard)
- 🎨 Componentes compartidos (shared/components)

## 📚 Documentación

| Documento | Descripción |
|-----------|-------------|
| **[QUICK-START.md](QUICK-START.md)** | 🚀 Guía de inicio rápido y tu primer feature |
| **[ARCHITECTURE.md](ARCHITECTURE.md)** | 🏛️ Arquitectura completa y conceptos |
| **[FOLDER-STRUCTURE.md](FOLDER-STRUCTURE.md)** | 📁 Estructura de carpetas detallada |
| **[CODE-SNIPPETS.md](CODE-SNIPPETS.md)** | 💻 Snippets de código útiles |

## 🏗️ Estructura del Proyecto

```
src/app/
├── 📦 core/               # Funcionalidades centrales
│   ├── guards/           # Route guards
│   ├── interceptors/     # HTTP interceptors
│   ├── services/         # Servicios singleton
│   ├── constants/        # Constantes globales
│   └── utils/            # Utilidades
│
├── 🔄 shared/             # Recursos compartidos
│   ├── components/       # Componentes reutilizables
│   ├── directives/       # Directivas custom
│   ├── pipes/            # Pipes custom
│   └── models/           # Interfaces compartidas
│
├── 🎯 features/           # Módulos de funcionalidades
│   ├── auth/            # Autenticación
│   └── dashboard/       # Dashboard
│
├── 🏛️ domain/             # Capa de dominio
│   ├── entities/        # Entidades del negocio
│   ├── repositories/    # Interfaces de repositorios
│   └── use-cases/       # Casos de uso
│
├── 💾 data/               # Capa de datos
│   ├── dtos/            # Data Transfer Objects
│   └── mappers/         # Conversores DTO ↔ Entity
│
└── 🔌 infrastructure/     # Capa de infraestructura
    ├── repositories/    # Implementaciones
    └── http/            # Servicios HTTP
```

## 🎓 Arquitectura en Capas

```
┌─────────────────────────────────┐
│       Presentation Layer        │  ← Components, UI
│         (Features)               │
├─────────────────────────────────┤
│       Application Layer         │  ← Use Cases, Lógica
│          (Domain)                │
├─────────────────────────────────┤
│         Data Layer               │  ← DTOs, Mappers
│           (Data)                 │
├─────────────────────────────────┤
│     Infrastructure Layer        │  ← APIs, HTTP, Storage
│      (Infrastructure)            │
└─────────────────────────────────┘
```

## 🛠️ Tecnologías

- **[Angular 21](https://angular.dev)**: Framework principal
- **[TypeScript 5.9](https://www.typescriptlang.org/)**: Lenguaje
- **[RxJS 7.8](https://rxjs.dev/)**: Programación reactiva
- **[Vitest](https://vitest.dev/)**: Testing

## 📝 Scripts Disponibles

```bash
npm start          # Inicia servidor de desarrollo
npm run build      # Build para producción
npm test           # Ejecuta tests
npm run watch      # Build en modo watch
```

## 💡 Ejemplos de Uso

### Crear un nuevo Feature

```bash
# 1. Crear estructura en features/mi-feature/
# 2. Crear componentes, servicios
# 3. Definir rutas en mi-feature.routes.ts
# 4. Agregar a app.routes.ts
```

Ver [QUICK-START.md](QUICK-START.md) para ejemplo completo.

### Usar componentes compartidos

```typescript
import { ButtonComponent, CardComponent } from '@shared/components';

@Component({
  imports: [ButtonComponent, CardComponent],
  template: `
    <app-card [title]="'Mi Tarjeta'">
      <app-button [text]="'Guardar'" (clicked)="onSave()"></app-button>
    </app-card>
  `
})
```

### Trabajar con APIs

```typescript
// 1. Define Entity en domain/entities
// 2. Define DTO en data/dtos
// 3. Crea Mapper en data/mappers
// 4. Implementa Repository en infrastructure
// 5. Crea Use Case en domain/use-cases
// 6. Usa en tu componente
```

Ver [ARCHITECTURE.md](ARCHITECTURE.md) para ejemplos completos.

## 🎯 Mejores Prácticas

✅ **Usa Path Aliases**
```typescript
import { AuthService } from '@features/auth/services';
import { ButtonComponent } from '@shared/components';
```

✅ **Componentes Standalone**
```typescript
@Component({
  standalone: true,
  imports: [CommonModule, ...],
})
```

✅ **Lazy Loading**
```typescript
{
  path: 'feature',
  loadChildren: () => import('./features/feature/feature.routes')
}
```

✅ **Separación de Responsabilidades**
- Components → UI y presentación
- Services → Lógica de aplicación
- Use Cases → Lógica de negocio
- Repositories → Acceso a datos

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea tu Feature Branch
3. Commit tus cambios
4. Push al Branch
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 🙏 Agradecimientos

Este template se basa en:
- [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) by Robert C. Martin
- [Angular Best Practices](https://angular.dev/style-guide)
- Experiencia de proyectos reales

## 📞 Soporte

Si tienes preguntas o necesitas ayuda:

- 📖 Lee la [documentación](ARCHITECTURE.md)
- 🐛 Reporta bugs en [Issues](../../issues)
- 💬 Discute en [Discussions](../../discussions)

---

**Desarrollado con ❤️ y mejores prácticas de Angular**

**⭐ Si te gusta este proyecto, dale una estrella!**

