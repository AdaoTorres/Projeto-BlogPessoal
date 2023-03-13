import axios from "axios";

export const api = axios.create({
  baseURL: 'url do render'
})

export const login = async(url: any, dados: any, setDados: any) => {
  const resposta = await api.post(url, dados)
  setDados(resposta.data)
}


export const cadastro = async(url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados)
  setDados(resposta.data)
}

export const busca = async(url: any, setDados: any, headers: any) => {
  const resposta = await api.get(url, headers)
  setDados(resposta.data)
}

export const buscaId = async(url: any, setDados: any, headers: any) => {
  const resposta = await api.get(url, headers)
  setDados(resposta.data)
}

export const post = async(url: any, dados: any, setDados: any, headers: any) => {
  const resposta = await api.post(url, dados, headers)
  setDados(resposta.data)
}

export const put = async(url: any, dados: any, setDados: any, headers: any) => {
  const resposta = await api.put(url, dados, headers)
  setDados(resposta.data)
}

export const deleteId = async(url: any, headers: any) => {
  await api.delete(url, headers)
}