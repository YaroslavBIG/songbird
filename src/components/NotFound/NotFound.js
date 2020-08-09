import React from 'react'
import { NavLink } from 'react-router-dom'

export const NotFound = () => {
  return (
    <p> Страница не найдена. Вернуться на <NavLink to="/">главную</NavLink>?</p>
  )
}
