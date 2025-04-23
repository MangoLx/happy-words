# Happy Words 项目文档

## 项目简介
Happy Words 是一个基于 React + TypeScript + Vite 构建的现代化 Web 应用，提供待办事项管理功能。项目采用模块化架构设计，使用自定义状态管理解决方案，实现高效的组件间通信。

## 快速开始

### 安装依赖
```bash
npm install
# 或
yarn
# 或
pnpm install
```

### 启动开发服务器
```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

### 构建生产版本
```bash
npm run build
# 或
yarn build
# 或
pnpm build
```

## 项目结构

```
src/
├── hooks/             # 自定义 hooks
│   └── useLocalState/ # 状态管理 hook
├── pages/             # 页面组件
│   ├── home/          # 首页
│   ├── todo/          # 待办事项（测试示例用）
│   └── error/         # 错误页
├── routes/            # 路由配置
├── components/        # 共享组件
└── modules/           # 全局状态模块
```

## 页面介绍

### 首页 (Home)
首页显示用户基本信息和待办事项概览，是应用的入口界面。

**路径:** `/`

**主要功能:**
- 显示用户信息
- 提供待办事项快速入口

### 待办事项 (Todo)
用户可以在此页面创建、查看、更新和删除待办事项。

**路径:** `/todo`

**主要功能:**
- 添加新待办事项
- 标记待办事项完成状态
- 删除待办事项
- 按状态筛选待办事项（全部/未完成/已完成）

### 错误页 (Error)
处理应用中的各种错误状态，提供友好的错误提示和恢复选项。

**路径:** `/error`

## 模块介绍

### Todo 模块
负责待办事项的状态管理和业务逻辑处理。

**文件结构:**
- `model/constant.ts` - 定义类型和常量
- `model/action.ts` - 提供动作创建函数
- `model/store.ts` - 实现状态管理逻辑

**主要功能:**
- 待办事项的增删改查
- 状态过滤
- 数据持久化

## 自定义 Hooks 介绍

### useLocalState
一个轻量级页面级状态管理 hook，基于 React Context 和 useReducer 实现。

**位置:** `src/hooks/useLocalState/useLocalState.tsx`

**特点:**
- 无外部依赖，轻量级
- 基于 React 原生 API
- 完整 TypeScript 类型支持
- 遵循 Redux 风格的状态管理模式

**使用示例:**
```tsx
// 创建 store
const { StoreProvider, useLocalStore } = createPageStore(initialState, reducer);

// 提供 store
const App = () => (
  <StoreProvider>
    <MyComponent />
  </StoreProvider>
);

// 使用 store
const MyComponent = () => {
  const [state, dispatch] = useLocalStore();
  // 使用状态和派发动作
};
```

## 路由系统

项目使用 React Router 进行路由管理，路由配置位于 `src/routes/` 目录。

**路由模块:**
- `routes/home.tsx` - 首页路由
- `routes/todo.tsx` - 待办事项路由
- `routes/error.tsx` - 错误页路由
- `routes/index.tsx` - 路由聚合

## 技术栈

- **前端框架:** React 18
- **开发语言:** TypeScript
- **构建工具:** Vite
- **路由管理:** React Router
- **状态管理:** Redux
- **样式方案:** CSS Modules

## 开发指南

### 添加新页面
1. 在 `src/pages/` 目录下创建新页面组件
2. 在 `src/routes/` 目录下添加对应路由配置
3. 在 `src/routes/index.tsx` 中导入并注册新路由

### 使用状态管理
1. 定义 Action 常量和类型
2. 创建初始状态和 reducer 函数
3. 使用 `createPageStore` 创建 store
4. 用 `StoreProvider` 包裹组件
5. 在子组件中使用 `useLocalStore` 获取状态和 dispatch

### 异步操作
项目可以通过以下方式处理异步操作:
1. 在组件中使用 React 的 `useEffect` 和 `useState`
2. 封装异步逻辑到自定义 hook 中
3. 使用 Thunk 模式实现异步 action

## 贡献指南

1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建 Pull Request

## 许可证

[MIT License](LICENSE)
