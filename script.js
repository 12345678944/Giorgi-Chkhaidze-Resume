
//if it's never been set or has been set to Mobile:
if (Session["view"] == null || Session["view"].ToString() == "Mobile")
{
	viewporttag.Visible = false; //remove meta viewport tag
	Session["View"] = "Desktop"; //we are now in desktop view
	Desktop_button.Text = "Mobile View";
}
else
{
	viewporttag.Visible = true; //enable meta viewport tag for mobile views
	Session["View"] = "Mobile";
	Desktop_button.Text = "Desktop View";
}
     addClass(Desktop_button, "clicked");