using System;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using System.Text;

namespace SnippetClipboard.Utils
{
    public class WinApi
    {
        [DllImport("user32.dll")]
        public static extern bool GetCaretPos(out System.Drawing.Point lpPoint);
    }
}
