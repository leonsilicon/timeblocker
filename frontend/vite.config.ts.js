// vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { join } from "desm";
import { quasar } from "@quasar/vite-plugin";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "~f": join("file:///Users/leonzalion/projects/timeblocker/frontend/vite.config.ts", "./src"),
      "~s": join("file:///Users/leonzalion/projects/timeblocker/frontend/vite.config.ts", "../shared")
    }
  },
  optimizeDeps: {
    exclude: [
      "@fullcalendar/core",
      "@fullcalendar/daygrid",
      "@fullcalendar/timegrid"
    ]
  },
  plugins: [
    vue({
      reactivityTransform: true
    }),
    quasar()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnO1xuaW1wb3J0IHsgam9pbiB9IGZyb20gJ2Rlc20nO1xuaW1wb3J0IHsgcXVhc2FyLCB0cmFuc2Zvcm1Bc3NldFVybHMgfSBmcm9tICdAcXVhc2FyL3ZpdGUtcGx1Z2luJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcblx0cmVzb2x2ZToge1xuXHRcdGFsaWFzOiB7XG5cdFx0XHQnfmYnOiBqb2luKFwiZmlsZTovLy9Vc2Vycy9sZW9uemFsaW9uL3Byb2plY3RzL3RpbWVibG9ja2VyL2Zyb250ZW5kL3ZpdGUuY29uZmlnLnRzXCIsICcuL3NyYycpLFxuXHRcdFx0J35zJzogam9pbihcImZpbGU6Ly8vVXNlcnMvbGVvbnphbGlvbi9wcm9qZWN0cy90aW1lYmxvY2tlci9mcm9udGVuZC92aXRlLmNvbmZpZy50c1wiLCAnLi4vc2hhcmVkJyksXG5cdFx0fSxcblx0fSxcblx0LyoqXG5cdCAqIENvbXBsYWlucyB3aGVuIHRoZSBpbXBvcnQgb3JkZXIgaXNuJ3QgZXhhY3Rcblx0ICovXG5cdG9wdGltaXplRGVwczoge1xuXHRcdGV4Y2x1ZGU6IFtcblx0XHRcdCdAZnVsbGNhbGVuZGFyL2NvcmUnLFxuXHRcdFx0J0BmdWxsY2FsZW5kYXIvZGF5Z3JpZCcsXG5cdFx0XHQnQGZ1bGxjYWxlbmRhci90aW1lZ3JpZCcsXG5cdFx0XSxcblx0fSxcblx0cGx1Z2luczogW1xuXHRcdHZ1ZSh7XG5cdFx0XHRyZWFjdGl2aXR5VHJhbnNmb3JtOiB0cnVlLFxuXHRcdH0pLFxuXHRcdHF1YXNhcigpLFxuXHRdLFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMzQixTQUFTO0FBQUEsSUFDUixPQUFPO0FBQUEsTUFDTixNQUFNLEtBQUsseUVBQXlFO0FBQUEsTUFDcEYsTUFBTSxLQUFLLHlFQUF5RTtBQUFBO0FBQUE7QUFBQSxFQU10RixjQUFjO0FBQUEsSUFDYixTQUFTO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUE7QUFBQTtBQUFBLEVBR0YsU0FBUztBQUFBLElBQ1IsSUFBSTtBQUFBLE1BQ0gscUJBQXFCO0FBQUE7QUFBQSxJQUV0QjtBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
