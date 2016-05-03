

# Requires s3cmd-1.6.1
# Need to set up the S3 credential

if [ "x$1" == x--release ]; then
target=s3://cosmo4d.org
else
target=s3://dev.cosmo4d.org
fi

# --no-mime-magic is important because python-magic
# is likely broken.
#
# e.g. https://github.com/s3tools/s3cmd/issues/198

s3cmd sync -P --no-mime-magic -M site/ $target
