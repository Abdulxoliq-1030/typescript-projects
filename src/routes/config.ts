import { ComponentType } from "react";
import * as Pages from "../pages"

interface IRoute {
path: string;
title: string;
Component: ComponentType<any>
}


export const routes: IRoute[] = [
	{
		path: "/",
		Component: Pages.Home,
		title: 'Home'
	},
	{
		path: "/albums",
		Component: Pages.Albums,
		title: "Albums"
	},
	{
		path: "/comments",
		Component: Pages.Comments,
		title: "Comments"
	},
	{
		path: "/photos",
		Component: Pages.Photos,
		title: "Photos"
	},
	{
		path: "/posts",
		Component: Pages.Posts,
		title: "Posts"
	},
	{
		path: "/todos",
		Component: Pages.Todos,
		title: "Todos"
	},	
	{
		path: "/users",
		Component: Pages.Users,
		title: "Users"
	},
]