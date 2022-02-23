-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Фев 23 2022 г., 13:44
-- Версия сервера: 5.7.29
-- Версия PHP: 7.4.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `magazine`
--

-- --------------------------------------------------------

--
-- Структура таблицы `advertising`
--

CREATE TABLE `advertising` (
  `id` int(11) NOT NULL,
  `title` varchar(225) NOT NULL,
  `img` blob,
  `text` text NOT NULL,
  `phone` varchar(14) NOT NULL,
  `sale` varchar(225) NOT NULL,
  `adress` varchar(225) NOT NULL,
  `instagram` varchar(225) NOT NULL,
  `facebook` varchar(225) NOT NULL,
  `tiktok` varchar(225) NOT NULL,
  `telegram` varchar(225) NOT NULL,
  `site` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `advertising`
--

INSERT INTO `advertising` (`id`, `title`, `img`, `text`, `phone`, `sale`, `adress`, `instagram`, `facebook`, `tiktok`, `telegram`, `site`) VALUES
(1, 'zagolovok', 0x5b6f626a656374204f626a6563745d, 'opis', '912135135131', '50%', 'adress', 'instagram', 'facebook', 'tiktok', 'telegram', 'www.site.com'),
(2, 'weqwqew', 0x5b6f626a656374204f626a6563745d, 'wqeqwwqe', '074045304', '50%', 'qweqwwqeq', 'asdas', 'asdas', 'asdas', 'asdas', 'dssad');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(225) NOT NULL,
  `password` varchar(225) NOT NULL,
  `role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `role`) VALUES
(1, 'admin@gmail.com', 'admin', 1);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `advertising`
--
ALTER TABLE `advertising`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `advertising`
--
ALTER TABLE `advertising`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
