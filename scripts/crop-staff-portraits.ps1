# Crops the photo area out of each official staff card (1659x1054 template) into
# public/assets/staff/portraits/<same-name>.jpg. Run from the project root:
#   powershell -ExecutionPolicy Bypass -File scripts/crop-staff-portraits.ps1
Add-Type -AssemblyName System.Drawing

$src = Join-Path $PWD "public/assets/staff"
$out = Join-Path $src "portraits"
New-Item -ItemType Directory -Force -Path $out | Out-Null

# Photo frame on the card template is x105 y405 470x430 with rounded corners;
# cropping 15px inside it avoids the corners and the frame's edge shading.
$crop = New-Object System.Drawing.Rectangle 120, 420, 440, 400

$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
$params = New-Object System.Drawing.Imaging.EncoderParameters 1
$params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality), 86L

Get-ChildItem $src -Filter *.jpg | ForEach-Object {
  $img = [System.Drawing.Bitmap]::FromFile($_.FullName)
  try {
    if ($img.Width -ne 1659 -or $img.Height -ne 1054) { Write-Warning "$($_.Name): unexpected size $($img.Width)x$($img.Height)" }
    $bmp = $img.Clone($crop, $img.PixelFormat)
    $bmp.Save((Join-Path $out $_.Name), $codec, $params)
    $bmp.Dispose()
  } finally { $img.Dispose() }
}
"done: " + (Get-ChildItem $out -Filter *.jpg).Count
