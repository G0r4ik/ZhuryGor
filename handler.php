<?php
$connection=mysqli_connect('127.0.0.1','root','root','shop');
$login=$_POST['login'];
$password=$_POST['password'];

$count = mysqli_query($connection, "SELECT * fROM `user` WHERE `login` = '$login' AND `password` = '$password'");

if(mysqli_num_rows($count) == 0)

{
	echo 'такого пользователя нет';
}
else
{
	echo 'С возвращением';
}
?>