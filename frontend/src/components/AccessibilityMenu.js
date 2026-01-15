import React, { useState } from 'react';
import { Settings, X, Sun, Moon, Contrast, Type, Eye, Focus, Zap } from 'lucide-react';
import { useAccessibility } from '../contexts/AccessibilityContext';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Label } from './ui/label';
import { Switch } from './ui/switch';

const AccessibilityMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    theme,
    setTheme,
    fontSize,
    setFontSize,
    reducedMotion,
    setReducedMotion,
    dyslexiaFont,
    setDyslexiaFont,
    enhancedFocus,
    setEnhancedFocus
  } = useAccessibility();

  const fontSizes = [
    { value: 'small', label: 'Small', size: '14px' },
    { value: 'medium', label: 'Medium', size: '16px' },
    { value: 'large', label: 'Large', size: '18px' },
    { value: 'extra-large', label: 'Extra Large', size: '20px' }
  ];

  return (
    <>
      {/* Floating accessibility button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-slate-900 text-white shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
        aria-label="Accessibility Settings"
      >
        {isOpen ? <X size={24} /> : <Settings size={24} />}
      </button>

      {/* Accessibility panel */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
          <Card
            className="fixed right-6 bottom-24 w-96 max-h-[80vh] overflow-y-auto shadow-2xl border-none"
            onClick={(e) => e.stopPropagation()}
          >
            <CardHeader className="border-b">
              <CardTitle className="flex items-center gap-2">
                <Settings size={24} />
                Accessibility Settings
              </CardTitle>
              <p className="text-sm text-slate-600 mt-2">
                Customize your experience with accessibility options designed for everyone.
              </p>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              {/* Theme Selection */}
              <div className="space-y-3">
                <Label className="text-sm font-semibold flex items-center gap-2">
                  <Sun size={18} />
                  Color Theme
                </Label>
                <div className="grid grid-cols-3 gap-2">
                  <Button
                    variant={theme === 'light' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setTheme('light')}
                    className="flex items-center gap-2"
                  >
                    <Sun size={16} />
                    Light
                  </Button>
                  <Button
                    variant={theme === 'dark' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setTheme('dark')}
                    className="flex items-center gap-2"
                  >
                    <Moon size={16} />
                    Dark
                  </Button>
                  <Button
                    variant={theme === 'high-contrast' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setTheme('high-contrast')}
                    className="flex items-center gap-2"
                  >
                    <Contrast size={16} />
                    High
                  </Button>
                </div>
              </div>

              {/* Font Size */}
              <div className="space-y-3">
                <Label className="text-sm font-semibold flex items-center gap-2">
                  <Type size={18} />
                  Text Size
                </Label>
                <div className="grid grid-cols-2 gap-2">
                  {fontSizes.map((fs) => (
                    <Button
                      key={fs.value}
                      variant={fontSize === fs.value ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setFontSize(fs.value)}
                      style={{ fontSize: fs.size }}
                    >
                      {fs.label}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Reduced Motion */}
              <div className="flex items-center justify-between space-x-2 py-2">
                <Label htmlFor="reduced-motion" className="flex items-center gap-2 cursor-pointer">
                  <Zap size={18} />
                  <div>
                    <div className="font-semibold">Reduce Motion</div>
                    <div className="text-xs text-slate-600">Minimize animations</div>
                  </div>
                </Label>
                <Switch
                  id="reduced-motion"
                  checked={reducedMotion}
                  onCheckedChange={setReducedMotion}
                />
              </div>

              {/* Dyslexia Font */}
              <div className="flex items-center justify-between space-x-2 py-2">
                <Label htmlFor="dyslexia-font" className="flex items-center gap-2 cursor-pointer">
                  <Eye size={18} />
                  <div>
                    <div className="font-semibold">Dyslexia-Friendly Font</div>
                    <div className="text-xs text-slate-600">Easier to read</div>
                  </div>
                </Label>
                <Switch
                  id="dyslexia-font"
                  checked={dyslexiaFont}
                  onCheckedChange={setDyslexiaFont}
                />
              </div>

              {/* Enhanced Focus */}
              <div className="flex items-center justify-between space-x-2 py-2">
                <Label htmlFor="enhanced-focus" className="flex items-center gap-2 cursor-pointer">
                  <Focus size={18} />
                  <div>
                    <div className="font-semibold">Enhanced Focus</div>
                    <div className="text-xs text-slate-600">Stronger outlines</div>
                  </div>
                </Label>
                <Switch
                  id="enhanced-focus"
                  checked={enhancedFocus}
                  onCheckedChange={setEnhancedFocus}
                />
              </div>

              {/* Info */}
              <div className="p-4 bg-slate-100 rounded-lg text-sm">
                <p className="font-semibold mb-1">About Accessibility</p>
                <p className="text-slate-600">
                  I'm committed to making the web accessible to everyone. These settings are saved to your device and persist across visits.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default AccessibilityMenu;