if (get_application_name()=="MacOS [Running] - Oracle VM VirtualBox") then
	-- x,y, xsize, ysize
        undecorate_window()
        unmaximize()
	set_window_geometry2(0,186,683,528);
        make_always_on_top()
        stick_window()
        focus_window()
end