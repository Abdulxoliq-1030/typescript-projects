import { ComponentType } from "react";
import * as Pages from "../pages"

interface IRoute {
path: string;
Component: ComponentType<any>
}


export const routes: IRoute[] = [
	{
		path: "/",
		Component: Pages.Home
	},
	{
		path: "/albums",
		Component: Pages.Albums
	},
	{
		path: "/comments",
		Component: Pages.Comments
	},
	{
		path: "/photos",
		Component: Pages.Photos
	},
	{
		path: "/posts",
		Component: Pages.Posts
	},
	{
		path: "/todos",
		Component: Pages.Todos
	},	
	{
		path: "/users",
		Component: Pages.Users
	},
]