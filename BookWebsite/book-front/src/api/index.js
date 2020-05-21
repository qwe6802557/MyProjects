import request from '../utils/request.js';
import globalData from '../utils/global_val.js'
export function register(query) {
    return request({
      url: globalData.sever_url+'/user/register',
      method: 'post',
      data:query
    })
}
export function login(query) {
    return request({
      url: globalData.sever_url+'/user/login',
      method: 'post',
      data:query
    })
}
export function forumIndex(query) {
    return request({
      url: globalData.sever_url+'/words/list',
      method: 'post',
      data:query
    })
}
export function forumAdd(query) {
    return request({
      url: globalData.sever_url+'/words/add',
      method: 'post',
      data:query
    })
}
export function forumDelete(query) {
    return request({
      url: globalData.sever_url+'/words/delete',
      method: 'post',
      data:query
    })
}
export function personalUpdate(query) {
    return request({
      url: globalData.sever_url+'/user/update',
      method: 'post',
      data:query
    })
}
export function userList(query) {
    return request({
      url: globalData.sever_url+'/user/list',
      method: 'post',
      data:query
    })
}
export function userDelete(query) {
    return request({
      url: globalData.sever_url+'/user/delete',
      method: 'post',
      data:query
    })
}
export function announceIndex(query) {
    return request({
      url: globalData.sever_url+'/announce/list',
      method: 'post',
      data:query
    })
}
export function announceAdd(query) {
    return request({
      url: globalData.sever_url+'/announce/add',
      method: 'post',
      data:query
    })
}
export function announceUpdate(query) {
    return request({
      url: globalData.sever_url+'/announce/update',
      method: 'post',
      data:query
    })
}
export function announceDelete(query) {
    return request({
      url: globalData.sever_url+'/announce/delete',
      method: 'post',
      data:query
    })
}
export function announcementIndex(query) {
    return request({
      url: globalData.sever_url+'/announce/init',
      method: 'post',
      data:query
    })
}
export function releaseCategory(query) {
    return request({
      url: globalData.sever_url+'/book/category',
      method: 'post',
      data:query
    })
}
export function indexBook(query) {
    return request({
      url: globalData.sever_url+'/book/list',
      method: 'post',
      data:query
    })
}
export function indexUserBook(query) {
    return request({
      url: globalData.sever_url+'/book/selfList',
      method: 'post',
      data:query
    })
}
export function addBook(query) {
    return request({
      url: globalData.sever_url+'/book/add',
      method: 'post',
      data:query
    })
}
export function updateBook(query) {
    return request({
      url: globalData.sever_url+'/book/update',
      method: 'post',
      data:query
    })
}
export function deleteBook(query) {
    return request({
      url: globalData.sever_url+'/book/delete',
      method: 'post',
      data:query
    })
}
export function hotBook(query) {
    return request({
      url: globalData.sever_url+'/book/setHot',
      method: 'post',
      data:query
    })
}
export function askBook(query) {
    return request({
      url: globalData.sever_url+'/book/handle',
      method: 'post',
      data:query
    })
}
export function messageIndex(query) {
    return request({
      url: globalData.sever_url+'/book/message',
      method: 'post',
      data:query
    })
}
export function handleMessage(query) {
    return request({
      url: globalData.sever_url+'/book/handleMessage',
      method: 'post',
      data:query
    })
}
export function readMessage(query) {
    return request({
      url: globalData.sever_url+'/book/confirmMessage',
      method: 'post',
      data:query
    })
}