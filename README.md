<div align="center">
  <h1>
    <br/>
    <br/>
    🐔
    <br />
    react-pubg
    <br />
    <br />
    <br />
    <br />
  </h1>
  <sup>
    <br />
    React hooks for pubg.ts
    <br />
    <br />
    <a href="https://www.npmjs.com/package/react-pubg">
       <img src="https://img.shields.io/npm/v/react-pubg?label=%20&style=for-the-badge" alt="Package Version" />
    </a>
    <a href="https://www.npmjs.com/package/react-pubg">
      <img src="https://img.shields.io/npm/dm/react-pubg?label=%20&style=for-the-badge" alt="Package Monthly Downloads" />
    </a>
    <a href="https://github.com/nurodev/react-pubg">
      <img src="https://img.shields.io/badge/-Docs-blue.svg?style=for-the-badge" alt="Docs" />
    </a>
    <a href="https://documentation.pubg.com/">
      <img src="https://img.shields.io/badge/-API-yellow.svg?style=for-the-badge" alt="API" />
    </a>
    <a href="http://react-pubg.vercel.app/">
      <img src="https://img.shields.io/badge/-Example-white.svg?style=for-the-badge" alt="Example" />
    </a>
  </sup>
  <br />
  <br />
  <br />
  <br />
</div>

## 🚀 Install

Install it locally in your project

```bash
npm i --save react-pubg

# Or with Yarn

yarn add react-pubg
```

## 🦄 Usage

### Sign for a developer account

You'll first need to [sign up on the PUBG developer API site](https://developer.playbattlegrounds.com/). Using this account you can create a API token

### Register an app

With an account created, you can [create a new developer application](https://developer.playbattlegrounds.com/apps/new?locale=en) that will provide you with your API key.

### Make something!

```tsx
import { usePlayer } from "react-pubg";

function App() {
  const {
    data: player,
    loading,
    error,
  } = usePlayer({
    apiKey: "...",
    value: "WackyJacky101", // Or an array of player names
  });

  if (loading) return <>Loading...</>;

  if (error) return <>Error fetching player data</>;

  return <pre>{JSON.stringify(player, null, 4)}</pre>;
}
```
