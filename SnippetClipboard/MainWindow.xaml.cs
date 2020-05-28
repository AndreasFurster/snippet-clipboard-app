using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using Microsoft.Toolkit.Wpf.UI.XamlHost;
using NHotkey;
using NHotkey.Wpf;
using Button = Windows.UI.Xaml.Controls.Button;

namespace SnippetClipboard
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();

            HotkeyManager.Current.AddOrReplace("ShowSnippetClipboard", Key.V, ModifierKeys.Alt | ModifierKeys.Control, showClipboard);

        }

        private void showClipboard(object sender, HotkeyEventArgs e)
        {
            this.Visibility = Visibility.Visible;
            Activate();
            Topmost = true;

            Console.WriteLine("Shortcut pressed");
        }

        private void Window_Deactivated(object sender, EventArgs e)
        {
            this.Visibility = Visibility.Hidden;
        }

        private void SomeButton_OnChildChanged(object sender, EventArgs e)
        {
            var host = (WindowsXamlHost) sender;
            var btn = (Button) host.Child;

            if (btn == null) return;

            btn.Content = "test :)";
        }
    }
}
