import { getChromeStorage, setChromeStorage } from "@/libs/chromeUtil"

const state = {
  password: '11111111',
  seed: 'film finger voyage during alter chat sentence hundred connect riot doctor cash sing nut chat',//助记词
  accountMap: {},
  currentAccount: {
    // address: "15KHkN7db2dUF5oWcvwTSSxg2uFqTHJH8J",
    address: "1GUhbeySSNywQcGcsjhPPXMX7iRZ6P6ovb",
    // address: "1NN5DQHp5goSLLFe6BhfL8DKALoCNuR9PT",
    base58PrivateKey: "xprvA3b4zNsRHPgvzSydbftV9acbtKhNui8P69E7B7UNmJCKfWJZ5biLtcnHC9gYWRdGufyhehMcFcaPYpCgNRYznSCBv1gxxGd3xUYAABibgxQ",
    // hexPrivateKey: "910010376d40528ef943df150f419f28d311e5d90751031f9951f1b6cfb5f8d3",
    hexPrivateKey: '0x76b33cfa093226848e1e979c649778b4a24e040a97bb099007f73afb54b4c2fb',
    index: 0,
    name: "创世地址"
  },


  mainAsset: {
    amt: 0.00,
    price: 10
  },
  parallelAsset: {
    name: "GBT",
    amt: 0.00,
    price: 10
  },


  mainNode: [{ index: 0, url: 'http://172.16.103.18:8801', txHeight: -1, txIndex: 0, coin: "BTY" }],
  currentMain: { index: 0, url: 'http://172.16.103.18:8801', txHeight: -1, txIndex: 0, coin: "BTY" },

  parallelNode: [{ index: 0, name: '金比特', coin: "GBT", url: "http://172.16.103.24:8801", txHeight: -1, txIndex: 0 }],
  currentParallel: { index: 0, name: '金比特', coin: "GBT", url: "http://172.16.103.24:8801", txHeight: -1, txIndex: 0 },

}

const mutations = {
  UPDATE_PASSWORD(state, payload) {
    state.password = payload;
  },
  UPDATE_SEED(state, payload) {
    state.seed = payload;
  },
  UPDATE_ACCOUNTS(state, accountMap) {
    state.accountMap = accountMap
  },
  UPDATE_CURRENTACCOUNT(state, currentAccount) {
    state.currentAccount = currentAccount
  },

  UPDATE_MAIN_NODE(state, payload) {
    state.mainNode.push(payload);

    // let backup = JSON.parse(JSON.stringify(state.mainNode))
    // backup.push(payload)
    // setChromeStorage("mainNodeList", backup).then(res => {
    //   if(res = "success"){
    //     state.mainNode = backup
    //   }
    // })
  },
  UPDATE_CURRENT_MAIN(state, { index, url, txHeight, txIndex, coin }) {
    let backup = JSON.parse(JSON.stringify(state.mainNode))
    let i = state.currentMain.index
    // if (i !== -1) {
    //   index && (state.mainNode[i].index = index)
    //   url && (backup[i].url = url)
    //   txHeight && (backup[i].txHeight = txHeight)
    //   txIndex && (backup[i].txIndex = txIndex)
    //   coin && (backup[i].coin = coin)
    //   setChromeStorage("mainNodeList", backup).then(res => {
    //     if (res == "success") {
    //       state.mainNode = backup
    //       state.currentMain = backup[i]
    //     }
    //   })
    // }
    index && (state.mainNode[i].index = index)
    url && (state.mainNode[i].url = url)
    txHeight && (state.mainNode[i].txHeight = txHeight)
    txIndex && (state.mainNode[i].txIndex = txIndex)
    coin && (state.mainNode[i].coin = coin)

    state.currentMain = state.mainNode[i]
  },
  UPDATE_PARALLEL_NODE(state, payload) {
    let backup = JSON.parse(JSON.stringify(state.parallelNode))
    backup.push(payload)
    // setChromeStorage("parallelNodeList", backup).then(res => {
    //   if (res == "success") {
        state.parallelNode = backup
      // }
    // })
  },
  UPDATE_CURRENT_PARALLEL(state, { index, url, txHeight, txIndex, coin }) {
    let backup = JSON.parse(JSON.stringify(state.parallelNode))
    let i = state.currentParallel.index
    index && (backup[i].index = index)
    url && (backup[i].url = url)
    txHeight && (backup[i].txHeight = txHeight)
    txIndex && (backup[i].txIndex = txIndex)
    coin && (backup[i].coin = coin)
    // setChromeStorage("parallelNodeList", backup).then(res => {
      // if (res == "success") {
        state.parallelNode = backup
        state.currentParallel = backup[i]
      // }
    // })
  },

  UPDATE_MAIN_ASSET(state, { amt, price }) {
    if (amt || amt == 0) {
      state.mainAsset.amt = amt
    }
    if (price) {
      state.mainAsset.price = price
    }
  },
  UPDATE_PARALLEL_ASSET(state, { name, amt, price }) {
    if (name) {
      state.parallelAsset.name = name
    }
    if (amt || amt == 0) {
      state.parallelAsset.amt = amt
    }
    if (price) {
      state.parallelAsset.price = price
    }
  },


}

export default {
  namespaced: true,
  state,
  mutations
}
